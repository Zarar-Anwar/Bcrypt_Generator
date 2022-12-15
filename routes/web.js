import express from 'express'
import bcrypt from '../controller/controller.js'

const router =express.Router()

router.get('/',bcrypt.bcryptpwd)
router.post('/',bcrypt.encryptpwd)


export default router