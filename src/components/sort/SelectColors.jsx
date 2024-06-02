import { Select, Option } from "@material-tailwind/react";
 
export function SelectColors() {
    return (
        <div className="flex w-72 flex-col gap-6">
            <Select color="blue" label="Select Version">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
       
            </Select>
     
     
        </div>
    );
}