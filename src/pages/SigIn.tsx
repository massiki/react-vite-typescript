import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"

const formSchema = z.object({
  name: z.string().min(1, { message: 'Nama Harus diisi' }),
  email: z.string().email({ message: 'Email tidak valid' }),
  password: z.string().min(8, { message: 'Password harus minimal 8 karakter' }),
  confirmPassword: z.string(),
  age: z.coerce.number<number>().min(18, { message: 'Umur minimal harus 18 tahun' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password dan Konfirmasi Password harus sama',
  path: ['confirmPassword'],
})

type SigInFormInputs = z.infer<typeof formSchema>

const SigIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SigInFormInputs>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: SigInFormInputs) => {
    console.log(data)
    reset()
  }

  return (
    <div className="form-page">
      <h1>SigIn Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name" >name</label>
          <input type="text" {...register('name')} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="age" >age</label>
          <input type="number" {...register('age')} />
          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password" >Password</label>
          <input type={showPassword ? 'text' : 'password'} {...register('password')} />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" >confirmPassword</label>
          <input type={showPassword ? 'text' : 'password'} {...register('confirmPassword')} />
          {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label>
            Show Password
          </label>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SigIn