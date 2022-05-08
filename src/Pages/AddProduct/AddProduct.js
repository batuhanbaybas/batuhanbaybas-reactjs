import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectComponent from '../../Components/SelectComponent/SelectComponent'
import CustomBar from '../../CustomComponents/CustomBar/CustomBar'
import CustomInput from '../../CustomComponents/CustomInput/CustomInput'

const AddProduct = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            productName: '',
            description: '',
            imageUrl: '',
            category: '',
            devEmail: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
            formik.resetForm()
            navigate('/')
        }
    })

    return (
        <div className='max-w-xl mx-auto mt-16'>
            <h3 className='text-center font-bold text-2xl '>Create Product</h3>
            <form onSubmit={formik.handleSubmit}>
                <CustomInput
                    placeholder={"Product name"}
                    onChange={formik.handleChange}
                    value={formik.values.productName}
                    name={"productName"} />
                <textarea
                    cols={50}
                    autoComplete='off'
                    name={"description"}
                    id={"description"}
                    type="text" placeholder={"Description"}
                    onChange={formik.handleChange} value={formik.values.description}
                    className=" p-3 w-full rounded-xl h-24 resize-none  outline-none" />

                <CustomInput
                    placeholder={"Image URL"}
                    onChange={formik.handleChange}
                    value={formik.values.imageUrl}
                    name={"imageUrl"} />
                <SelectComponent name="category" onChange={formik.handleChange} value={formik.values.category} className="p-3" />
                <CustomInput
                    placeholder={"Developer Email"}
                    onChange={formik.handleChange}
                    value={formik.values.devEmail}
                    name={"devEmail"} />
                <CustomBar>

                    <button type="submit" className="rounded-xl p-3 w-full">Create</button>
                </CustomBar>



            </form>
        </div>
    )
}

export default AddProduct