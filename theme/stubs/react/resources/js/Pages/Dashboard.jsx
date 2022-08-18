import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Theme/Button";
import LinkButton from "@/Components/Theme/LinkButton";
import Card from "@/Components/Theme/Card";
import Badge from "@/Components/Theme/Badge";

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
              href={route("dashboard123")}
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
          </div>{" "}
          <br></br>
          <span>Card</span> <br></br>
          <div>
            <Card
              outlined={true}
              elevate={true}
              header={<span>Card Header</span>}
              body={
                <span>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </span>
              }
              footer={<span>Card Footer</span>}
            />
          </div><br></br>
          <span>Badge</span> <br></br>
          <div>
          <Badge 
          align="right"
          badgeValue={<span className="p-1">100</span>}
          buttonValue={<Button
            className="m-1"
            type="button"
            elevate={true}
            color="primary"
          >
            Add Notification
          </Button>}
          />
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
