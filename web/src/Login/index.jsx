import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const Input = props => (
    <input {...props} className="w-full bg-transparent p-4 border rounded border-onix text-lg outline-none focus:border-platinum"/>
)

const validationSchema = yup.object({
    email: yup.string().required('Digite seu email').email('E-mail inválido'),
    password: yup.string().required('Digite sua senha')
})

        onSubmit: async values => {
            const res = await axios.get('http://localhost:9901/login', {
                auth: {
                    username: values.email,
                    password: values.password
                }
            })

            signInUser(res.data)
        },
