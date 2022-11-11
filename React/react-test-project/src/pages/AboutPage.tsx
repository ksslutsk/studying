import { FunctionComponent } from "react";
import { Button } from "../shared/components/Button/Button";

export const AboutPage: FunctionComponent = () => {
    return (
        <div>
            <Button condition="basic"/>
            <Button condition="loading"/>
            <Button condition="outlined"/>
            <Button condition="text"/>
            <Button condition="basic raised"/>
            <Button condition="basic small"/>
            <Button condition="danger large"/>
            <Button condition="dangerOutline"/>
            <Button condition="dangerOutline rounded"/>
            <Button condition="basic small raised rounded"/>
        </div>
    );
}