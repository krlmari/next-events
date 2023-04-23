import React from "react";
import copy from "copy-to-clipboard";
import { Container } from "./CopyButton.styled";
import CopyIcon from "@/icons/copy.svg";

interface CopyButtonProps {
    copyText: string;
    className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ copyText, className }) => {
    const clickHandler = () => {
        const copyContent = async () => {
            try {
                const text = new DOMParser().parseFromString(
                    copyText,
                    "text/html"
                ).documentElement.textContent!;
                copy(text);
            } catch (err) {
                console.error(err);
            }
        };
        copyContent();
    };

    return (
        <Container className={className} onClick={clickHandler}>
            <CopyIcon />
        </Container>
    );
};

export default CopyButton;
