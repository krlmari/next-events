import { GetStaticProps } from "next";
import React from "react";
import Layout from "@/components/common/Layout/Layout";
import { BasePageProps } from "@/interfaces";
import { getIndexPage } from "@/lib/api";
import Events, { CardsGridProps } from "@/components/sections/Events/Events";

interface IndexProps extends BasePageProps {
    content: {
        events: CardsGridProps;
    };
}

const Index: React.FC<IndexProps> = ({ meta, header, sandwich, content }) => {
    return (
        <Layout meta={meta} header={header} sandwich={sandwich}>
            {content?.events && <Events {...content.events} />}
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    const content = await getIndexPage();

    return {
        props: {
            meta: {
                title: "Мероприятия",
                description: "description",
                keywords: "keywords",
            },
            header: {},
            sandwich: {},
            content,
        },
        revalidate: 10,
    };
};

export default Index;
