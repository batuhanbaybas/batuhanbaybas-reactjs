import {useFormik} from 'formik'
import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import SelectComponent from '../../Components/SelectComponent/SelectComponent'
import CustomBar from '../../CustomComponents/CustomBar/CustomBar'
import CustomInput from '../../CustomComponents/CustomInput/CustomInput'
import {fetchAllProducts, postPorudct} from '../../Redux/features/productSlice'
import * as Yup from 'yup'
import ValidationComponent from '../../Components/ValidationComponent/ValidationComponent'

const AddProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please enter product name"),
        price: Yup.number().required("Please enter product price"),
        category: Yup.string().required("Please Select category for your product"),
        description: Yup.string().required("Please enter your product description"),
        avatar: Yup.string().required("Please select your product image")
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            avatar: '',
            category: '',
            price: '',
        },
        validationSchema,
        onSubmit: values => {
            try {
                dispatch(postPorudct(values))
                dispatch(fetchAllProducts())
                navigate('/')
            } catch (error) {
                alert(error.message)

            }
        }
    })

    return (
        <div className='max-w-xl mx-auto mt-16'>
            <h3 className='text-center font-bold text-2xl '>Create Product</h3>
            <form onSubmit={formik.handleSubmit}>
                <CustomInput
                    placeholder={"Product name"}
                    validation={formik.touched.name && formik.errors.name}
                    validationMessage={formik.errors.name}
                    onChange={formik.handleChange}
                    value={formik.values.productName}
                    name={"name"}/>
                {formik.errors.name && formik.touched.description &&
                    <ValidationComponent validationMessage={formik.errors.name}/>}
                <textarea
                    cols={50}
                    autoComplete='off'
                    name={"description"}
                    id={"description"}
                    type="text" placeholder={"Description"}
                    onChange={formik.handleChange} value={formik.values.description}
                    className=" p-3 w-full rounded-xl h-24 resize-none  outline-none"/>
                <CustomInput
                    placeholder={"Image URL"}
                    validation={formik.touched.description && formik.errors.description}
                    validationMessage={formik.errors.nadescriptione}
                    onChange={formik.handleChange}
                    value={formik.values.imageUrl}
                    name={"avatar"}/>
                <SelectComponent validation={formik.errors.description && formik.touched.description}
                                 validationMessage={formik.errors.description}
                                 name="category" onChange={formik.handleChange}
                                 value={formik.values.category}
                                 className="p-3"/>

                <CustomInput
                    placeholder={"Price"}
                    type="number"
                    validation={formik.touched.price && formik.errors.price}
                    validationMessage={formik.errors.price}
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    name={"price"}/>
                <CustomBar>
                    <button type="submit" className="rounded-xl p-3 w-full">Create</button>
                </CustomBar>


            </form>
        </div>
    )
}

export default AddProduct