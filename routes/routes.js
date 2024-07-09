const router = require('./src/routers/routes');

app.use("/api", router); // Using the upload middleware in your route

//======================= AuthCustomerController =============================
router.post("/auth/customer/loginUser",AuthCustomerController.loginCustomer); 
router.post("/auth/customer/registerUser",upload.single('image'),AuthCustomerController.registerCustomer); 
router.delete("/auth/customer/delete/:Cus_ID",AuthCustomerController.deleteCustomer); 
router.get("/auth/customer/getAll",AuthCustomerController.getAllCostomers); 
router.get('/auth/customer/:Cus_ID', AuthCustomerController.getCustomerByID);
router.put('/auth/customer/update/:Cus_ID', upload.single('image'), AuthCustomerController.updateCustomer); 


class AuthCustomerController {
    static async loginCustomer(req, res) {
        try {
            const connection = connectToMySQL();
            const { phoneNumber, password } = req.body;
            if (!phoneNumber || !password) {
                return res.json({
                    message: "ກະລຸນາປ້ອນຂໍ້ມູນກ່ອນ !",
                });
            }
            const queryUserLogin = 'SELECT * FROM tb_customers WHERE Phone_Number = ?';
            connection.query(queryUserLogin, [phoneNumber], async (error, results) => {
                if (error) {
                    return res.json({
                        message: "ເກີດຂໍ້ຜິດພາດ",
                    });
                }
                // Check if user exists
                if (results.length === 0) {
                    return res.json({
                        message: "ບໍ່ພົບ PhoneNumber !",
                    });
                }
                const user = results[0];
                // Compare password
                if (user['Password'] != password) {
                    return res.json({ message: "ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ  !" });
                }
                const payload = {
                    Phone_Number: user['Phone_Number']
                };
                var accessToken = "";
                accessToken = await MiddleWare.GenerateToken(payload);
                // Close MySQL connection
                connection.end();
                return res.json({
                    status: "ok",
                    message: "ເຂົ້າສູ່ລະບົບສຳເລັດ",
                    data: user,
                    token: accessToken,

                });
            });
        } catch (error) {
            return res.json({
                message: error.message,
            });
        }
    }
}