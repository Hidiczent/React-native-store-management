const bcrypt = require("bcryptjs");

const testHashAndCompare = async () => {
  const plainPassword = '123';

  // แฮชรหัสผ่าน
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  console.log(`Hashed password: ${hashedPassword}`);

  // เปรียบเทียบรหัสผ่าน
  const validPassword = await bcrypt.compare(plainPassword, hashedPassword);
  console.log(`Password valid: ${validPassword}`);
};

testHashAndCompare();
