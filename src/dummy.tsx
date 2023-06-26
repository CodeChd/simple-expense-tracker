// import { FieldValues, useForm } from "react-hook-form";
// import { z } from "zod";

// //to utilize zod in hookform
// import { zodResolver } from '@hookform/resolvers/zod';


// //validation
// const schema = z.object({
//   name: z.string().min(3, {message: "name must be atleast 3 characters"}),
//   age: z.number({invalid_type_error: 'Age field is required'}).min(18)
// })


// //zod inferring a type annotation to props
// type Formdata = z.infer<typeof schema>


// const Form = () => {
  
//     // const nameRef = useRef<HTMLInputElement>(null)
//     // const ageRef = useRef<HTMLInputElement>(null)

//     // const handleSubmit = (e: React.FormEvent) => {
//     //     e.preventDefault()
//     //     console.log(nameRef.current?.value
//     //     console.log(ageRef.current?.value)
//     // }

//   const {register, handleSubmit, formState: {errors, isValid}} = useForm<Formdata>({resolver: zodResolver(schema)})

//   console.log(register('name'))

//   const onSubmit = (data: FieldValues) => console.log(data)


//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">Name</label>
//         <input {...register('name')}  id="name" type="text" className="form-control"></input>
//         { errors.name && <p className="text-danger">{errors.name.message}</p> }
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">Age</label>
//         <input {...register('age', {valueAsNumber: true})} id="age" type="number" className="form-control"></input>
//         { errors.age && <p className="text-danger">{errors.age.message}</p> }

//       </div>
//       <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;
