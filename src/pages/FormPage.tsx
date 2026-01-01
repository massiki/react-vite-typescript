import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" })
})

type FormPageInputs = z.infer<typeof formSchema>;

const FormPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormPageInputs>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (d: FormPageInputs) => {
    console.log(d)
  }

  return (
    <div className="form-page">
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password" >Password</label>
          <input type="password" {...register("password")}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormPage