import React, {useState} from 'react';
import Button from "../../components/Button.jsx";
import SliderForm from "./SliderForm.jsx";
import Table from "../../components/Table.jsx";
import TableRow from "../../components/TableRow.jsx";
import TableData from "../../components/TableData.jsx";

const Index = ({sliders}) => {

    const [showForm,setShowForm] = useState(false);

    const prepareNewForm = () => {
        setShowForm(true);
    }

    return (
        <>
            <SliderForm showForm={showForm} setShowForm={setShowForm}  />
            <div>
                <Button onClick={prepareNewForm} >Create Slider</Button>
            </div>
            <div>
                <Table columns={[{field : 'Link'},{field: 'Image'}]}>
                    {
                        sliders.data.map(item => (
                            <TableRow key={item.id}>
                                <TableData>{item.link}</TableData>
                                <TableData>
                                    <img width={100} src={item.image} alt=""/>
                                </TableData>
                            </TableRow>
                        ))
                    }
                </Table>
            </div>
        </>
    );
};

export default Index;
