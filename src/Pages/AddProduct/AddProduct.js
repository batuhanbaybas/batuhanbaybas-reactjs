import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectComponent from '../../Components/SelectComponent/SelectComponent'
import CustomBar from '../../CustomComponents/CustomBar/CustomBar'
import CustomInput from '../../CustomComponents/CustomInput/CustomInput'
import * as Yup from 'yup'
import ValidationMessage from '../../Components/ValidationMessage/ValidationMessage'
const AddProduct = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        productName: Yup.string().required('Please enter a product name'),
        price: Yup.number().required('Please define a price for the product'),
        category: Yup.string().required('Please select a category'),
        description: Yup.string().required('Plese enter a description for the product'),
        image: Yup.string().required('Please put an image for your product'),
    })


    const formik = useFormik({
        initialValues: {
            productName: '',
            description: '',
            imageUrl: '',
            category: '',
            price: '',
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
            formik.resetForm()
            navigate('/')
        }
    })

    return (
        <div className='max-w-xl mx-auto mt-16' >
            <h3 className='text-center font-bold text-2xl '>Create Product</h3>
            <form onSubmit={formik.handleSubmit}>
                {formik.errors.productName && <ValidationMessage message={formik.errors.productName} />}
                <CustomInput
                    placeholder={"Product name"}
                    onChange={formik.handleChange}
                    value={formik.values.productName}
                    name={"productName"} />
                {formik.errors.description && formik.touched.description && <ValidationMessage message={formik.errors.description} />}
                <textarea
                    cols={50}
                    autoComplete='off'
                    name={"description"}
                    id={"description"}
                    type="text" placeholder={"Description"}
                    onChange={formik.handleChange} value={formik.values.description}
                    className=" p-3 w-full rounded-xl h-24 resize-none  outline-none" />

                {formik.errors.imageUrl && formik.touched.imageUrl && <ValidationMessage message={formik.errors.imageUrl} />}
                <CustomInput
                    placeholder={"Image URL"}
                    onChange={formik.handleChange}
                    value={formik.values.imageUrl}
                    name={"imageUrl"} />

                {formik.errors.category && formik.touched.category && <ValidationMessage message={formik.errors.category} />}
                <SelectComponent name="category" onChange={formik.handleChange} value={formik.values.category} className="p-3" />
                {formik.errors.price && formik.touched.price && <ValidationMessage message={formik.errors.price} />}
                <CustomInput
                    placeholder={"Price"}
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    name={"price"} />
                <CustomBar>
                    <button type="submit" className="rounded-xl p-3 w-full">Create</button>
                </CustomBar>



            </form>
        </div >
    )
}

export default AddProduct