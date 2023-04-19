import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '@/components/common/Layout/Layout';
import { BasePageProps } from '@/interfaces';

interface IndexProps extends BasePageProps {
    /* Page props*/
}

const Index: React.FC<IndexProps> = (props) => {
    return (
        <Layout meta={props.meta} header={props.header} sandwich={props.sandwich}>
            {/* Page body */}
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    return {
        props: {
            meta: {
                title: 'Title',
                description: 'description',
                keywords: 'keywords'
            },
            header: {},
            sandwich: {}
        },
        revalidate: 1
    };
};

export default Index;
