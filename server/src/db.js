import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..');
const BANS_FILE = join(DATA_DIR, 'data', 'bans.json');
const ADMINS_FILE = join(DATA_DIR, 'data', 'admins.json');

// ensure data dir
if (!existsSync(join(DATA_DIR, 'data'))) {
  mkdirSync(join(DATA_DIR, 'data'));
}

// ── Low-level JSON file helpers ──

function readJSON(file, fallback) {
  if (!existsSync(file)) return fallback;
  return JSON.parse(readFileSync(file, 'utf-8'));
}

function writeJSON(file, data) {
  writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
}

// ── Auto-increment ID ──

let nextId = 1;
function getNextId(items) {
  if (items.length === 0) return 1;
  return Math.max(...items.map(i => i.id)) + 1;
}

// ── Bans ──

export const banDB = {
  list() {
    return readJSON(BANS_FILE, []);
  },

  find(id) {
    return this.list().find(b => b.id === id) || null;
  },

  search(query) {
    const q = query.toLowerCase();
    return this.list().filter(b =>
      b.player.toLowerCase().includes(q) ||
      b.reason.toLowerCase().includes(q)
    );
  },

  add({ player, reason, date, operator }) {
    const bans = this.list();
    const ban = {
      id: getNextId(bans),
      player,
      reason: reason || '',
      date: date || new Date().toISOString().slice(0, 10),
      operator: operator || '',
      created_at: new Date().toISOString(),
    };
    bans.unshift(ban);
    writeJSON(BANS_FILE, bans);
    return ban;
  },

  update(id, { player, reason, date, operator }) {
    const bans = this.list();
    const idx = bans.findIndex(b => b.id === id);
    if (idx === -1) return null;

    bans[idx] = {
      ...bans[idx],
      player: player ?? bans[idx].player,
      reason: reason ?? bans[idx].reason,
      date: date ?? bans[idx].date,
      operator: operator ?? bans[idx].operator,
    };
    writeJSON(BANS_FILE, bans);
    return bans[idx];
  },

  remove(id) {
    const bans = this.list();
    const idx = bans.findIndex(b => b.id === id);
    if (idx === -1) return null;

    const [removed] = bans.splice(idx, 1);
    writeJSON(BANS_FILE, bans);
    return removed;
  },
};

// ── Admins ──

export const adminDB = {
  findByUsername(username) {
    const admins = readJSON(ADMINS_FILE, []);
    return admins.find(a => a.username === username) || null;
  },

  create(username, passwordHash) {
    const admins = readJSON(ADMINS_FILE, []);
    if (admins.find(a => a.username === username)) {
      throw new Error('用户名已存在');
    }
    const admin = {
      id: getNextId(admins),
      username,
      password: passwordHash,
      created_at: new Date().toISOString(),
    };
    admins.push(admin);
    writeJSON(ADMINS_FILE, admins);
    return { id: admin.id, username: admin.username };
  },
};
