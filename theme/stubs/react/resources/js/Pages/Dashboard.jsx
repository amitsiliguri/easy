import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Theme/Button";

export default function Dashboard(props) {
  const [name, setname] = useState("");

  const onHandleChange = (event) => {
    setname(event.target.value);
  };
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Easy Theme | Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              Hi {props.auth.user.name} Welcome to the Dashboard!
            </div>
          </div><br></br>
           <span>Small</span> <br></br>
          <div>
            <Button className='m-1' type="button" small={true}>Small  Button</Button>
            <Button className='m-1' type="button" small={true} color="primary">Small  Button</Button>
            <Button className='m-1' type="button" small={true} color="warning">Small  Button</Button>
            <Button className='m-1' type="button" small={true} color="danger">Small  Button</Button>
            <Button className='m-1' type="button" small={true} color="success">Small  Button</Button>
          </div>
          <span>Outline</span> <br></br>
          <div>
            <Button className='m-1' type="button" outlined={true}>Small  Button</Button>
            <Button className='m-1' type="button" outlined={true} color="primary">Small  Button</Button>
            <Button className='m-1' type="button" outlined={true} color="warning">Small  Button</Button>
            <Button className='m-1' type="button" outlined={true} color="danger">Small  Button</Button>
            <Button className='m-1' type="button" outlined={true} color="success">Small  Button</Button>
          </div>
          <span>Elevated solid</span> <br></br>
          <div>
            <Button className='m-1' type="button" elevate={true}>Small  Button</Button>
            <Button className='m-1' type="button" elevate={true} color="primary">Small  Button</Button>
            <Button className='m-1' type="button" elevate={true} color="warning">Small  Button</Button>
            <Button className='m-1' type="button" elevate={true} color="danger">Small  Button</Button>
            <Button className='m-1' type="button" elevate={true} color="success">Small  Button</Button>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
