const auth = require('./Middleware/auth');
const userModel = require('./models/userModel');
const { loginUser } = require('./controllers/userController');
const testUserCreationAndLogin = async () => {
  const email = "nit@gmail.com";
  const plainPassword = "123";
  
  // สร้างผู้ใช้ใหม่
  const hashedPassword = await auth.hashPassword(plainPassword);
  const newUser = {
    first_name: "Test",
    last_name: "User",
    email,
    password: hashedPassword,
    gender: "male",
    birth_day: new Date(2000, 0, 1),
    phone: "1234567890",
    roles: "user",
    village: "Test Village",
    is_delete: 0,
    deleted_at: null,
    district_id: 1,
    store_id: 1
  };
  
  await userModel.createUser(newUser);
  console.log("User created with hashed password");

  // ล็อกอินด้วยรหัสผ่านธรรมดา
  const loginSuccess = await loginUser({
    body: { email, password: plainPassword }
  }, {
    status: (code) => ({ json: (response) => console.log(`Login response: ${JSON.stringify(response)}`) })
  });

  console.log("Login test completed");
};

testUserCreationAndLogin();
