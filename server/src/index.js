import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { banDB, adminDB } from './db.js';
import { signToken, authMiddleware } from './auth.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ═══════════════════════════════════════
//  Auth
// ═══════════════════════════════════════

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: '用户名和密码不能为空' });
  }

  const admin = adminDB.findByUsername(username);
  if (!admin || !bcrypt.compareSync(password, admin.password)) {
    return res.status(401).json({ error: '用户名或密码错误' });
  }

  const token = signToken({ id: admin.id, username: admin.username });
  res.json({ token, username: admin.username });
});

// ═══════════════════════════════════════
//  Bans — 公开接口
// ═══════════════════════════════════════

app.get('/api/bans', (req, res) => {
  const { q } = req.query;
  const bans = q ? banDB.search(q) : banDB.list();
  res.json({ bans });
});

// ═══════════════════════════════════════
//  Bans — 管理接口（需认证）
// ═══════════════════════════════════════

app.post('/api/bans', authMiddleware, (req, res) => {
  const { player, reason, date } = req.body;
  if (!player?.trim()) {
    return res.status(400).json({ error: '玩家名不能为空' });
  }

  const ban = banDB.add({
    player: player.trim(),
    reason: reason?.trim() || '',
    date,
    operator: req.admin.username,
  });

  res.status(201).json(ban);
});

app.put('/api/bans/:id', authMiddleware, (req, res) => {
  const id = Number(req.params.id);
  const existing = banDB.find(id);
  if (!existing) {
    return res.status(404).json({ error: '记录不存在' });
  }

  const ban = banDB.update(id, {
    player: req.body.player?.trim(),
    reason: req.body.reason?.trim(),
    date: req.body.date,
    operator: req.admin.username,
  });

  res.json(ban);
});

app.delete('/api/bans/:id', authMiddleware, (req, res) => {
  const id = Number(req.params.id);
  const existing = banDB.find(id);
  if (!existing) {
    return res.status(404).json({ error: '记录不存在' });
  }

  const removed = banDB.remove(id);
  res.json({ success: true, removed });
});

// ═══════════════════════════════════════
//  Health
// ═══════════════════════════════════════

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// ═══════════════════════════════════════
//  Start
// ═══════════════════════════════════════

app.listen(PORT, () => {
  console.log(`
  ┌───────────────────────────────────────┐
  │  StarShine Ban API                    │
  │  http://localhost:${PORT}               │
  │                                       │
  │  GET    /api/bans          (public)   │
  │  POST   /api/bans          (admin)    │
  │  PUT    /api/bans/:id      (admin)    │
  │  DELETE /api/bans/:id      (admin)    │
  │  POST   /api/auth/login    (public)   │
  │  GET    /api/health        (public)   │
  └───────────────────────────────────────┘
  `);
});
