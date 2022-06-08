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

export function Login({signInUser}){
    const formik = useFormik({
        onSubmit: async values => {
            const res = await axios.get(`${import.meta.env.VITE_API_HOST}/login`, {
                auth: {
                    username: values.email,
                    password: values.password
                }
            })

            signInUser(res.data)
        },
        validationSchema,
        validateOnChange: true,
        initialValues: {
            email: '',
            password: ''
        }
    })
    return (
        <div className='h-full flex justify-center'>
            <div className='bg-birdBlue lg:flex-1'></div>
            <div className="flex-1 flex h-full items-center justify-center p-12 space-y-6">
                <div className='max-w-md flex-1'>
                    <h1>Acesse sua conta</h1>
                    <form className="space-y-6" onSubmit={formik.handleSubmit}>
                        <div className='space-y-2'>
                            <Input 
                                name="email" 
                                placeholder="E-mail"
                                type="text"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled={formik.isSubmitting}
                            />
                            {(formik.touched.email) && (formik.errors.email) && 
                            (<span className='text-red-500 text-sm mt-2'>{formik.errors.email}</span>)}
                        </div>
                    <div>
                        <Input 
                                name="password" 
                                placeholder="Senha"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled={formik.isSubmitting}
                            />
                        {(formik.touched.password) && (formik.errors.password) && 
                            (<span className='text-red-500 text-sm mt-2'>{formik.errors.password}</span>)}
                    </div>
                        <button 
                            type='submit'
                            className='bg-birdBlue py-4 rounded-full disabled:opacity-50 w-full text-lg'
                            disabled={formik.isSubmitting || !formik.isValid}>
                            {formik.isSubmitting ? 'Enviando...' : 'Entrar'}
                        </button>
                    </form>

                    <span className="text-sm text-silver text-center">
                        Não tem conta? <a className="text-birdBlue" href='/signup'>Inscreva-se</a>
                    </span>
                </div>
            </div>
        </div>
    )
}