import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Theme/Button";
import LinkButton from "@/Components/Theme/LinkButton";

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
          </div>
          <br></br>
          <span>Button</span> <br></br>
          <div>
            <Button className="m-1" type="button" small={true} color="primary">
              Small Button
            </Button>
            <Button className="m-1" type="button" color="warning">
              Flat Solid Button
            </Button>
            <Button
              className="m-1"
              type="button"
              outlined={true}
              color="warning"
            >
              Flat Outlined Button
            </Button>
            <Button
              className="m-1"
              type="button"
              rounded={true}
              elevate={true}
              color="danger"
            >
              Elevated Solid Rounded Button
            </Button>
            <Button
              className="m-1"
              type="button"
              rounded={true}
              elevate={true}
              outlined={true}
              color="success"
            >
              Elevated Outlined Rounded Button
            </Button>
          </div>
          <span>Link Button</span> <br></br>
          <div>
            <LinkButton
              className="m-1"
              type="button"
              small={true}
              color="primary"
            >
              Small Button
            </LinkButton>
            <LinkButton className="m-1" type="button" color="warning">
              Flat Solid Button
            </LinkButton>
            <LinkButton
              href={route('dashboard123')}
              className="m-1"
              type="button"
              outlined={true}
              color="warning"
            >
              Flat Outlined Button
            </LinkButton>
            <LinkButton
              className="m-1"
              type="button"
              rounded={true}
              elevate={true}
              color="danger"
            >
              Elevated Solid Rounded Button
            </LinkButton>
            <LinkButton
              className="m-1"
              type="button"
              rounded={true}
              elevate={true}
              outlined={true}
              color="success"
            >
              Elevated Outlined Rounded Button
            </LinkButton>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
