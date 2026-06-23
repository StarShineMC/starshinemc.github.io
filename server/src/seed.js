import bcrypt from 'bcryptjs';
import { adminDB } from './db.js';

const username = process.argv[2] || 'admin';
const password = process.argv[3] || 'starshine2024';

const hash = bcrypt.hashSync(password, 10);

try {
  const admin = adminDB.create(username, hash);
  console.log(`✓ 管理员创建成功`);
  console.log(`  用户名: ${admin.username}`);
  console.log(`  密码:   ${password}`);
  console.log(`  ⚠ 请在生产环境中修改默认密码`);
} catch (e) {
  console.log(`✗ ${e.message}`);
}
