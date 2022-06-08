import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const Input = props => (
    <input {...props} className="w-full bg-transparent p-4 border rounded border-onix text-lg outline-none focus:border-platinum"/>
)

const validationSchema = yup.object({
    name: yup.string().required('Digite seu nome'),
    username: yup.string().required('Digite um nome de usuário'),
    email: yup.string().required('Digite seu email').email('E-mail inválido'),
    password: yup.string().required('Digite sua senha')
})

export function Signup({signInUser}){
    const formik = useFormik({
        onSubmit: async values => {
            const res = await axios.post(`${import.meta.env.VITE_API_HOST}/signup`, {
                name: values.name,
                username: values.username,
                email: values.email,
                password: values.password
            })

            signInUser(res.data)
        },
        validationSchema,
        validateOnChange: true,
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    })
    return (
        <div className="flex h-full flex-col justify-center p-12 space-y-6">
            <h1 className='text-3xl'>Crie sua conta</h1>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className='space-y-2'>
                    <Input 
                        name="name" 
                        placeholder="Nome"
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                    />
                    {(formik.touched.name) && (formik.errors.name) && 
                    (<span className='text-red-500 text-sm mt-2'>{formik.errors.name}</span>)}
                </div>
                <div className='space-y-2'>
                    <Input 
                        name="username" 
                        placeholder="Nome de usuário"
                        type="text"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                    />
                    {(formik.touched.username) && (formik.errors.username) && 
                    (<span className='text-red-500 text-sm mt-2'>{formik.errors.username}</span>)}
                </div>
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
                    {formik.isSubmitting ? 'Enviando...' : 'Cadastrar'}
                </button>
            </form>

            <span className="text-sm text-silver text-center">
                Já tem uma conta? <a className="text-birdBlue" href='/login'>Acesse</a>
            </span>

        </div>
    )
}