import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ title, description, image, icon, article }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        defaultIcon,
        twiterUsername
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image}|| ${defaultImage}`,
        icon: `${icon}|| ${defaultIcon}`,
        url: `${siteUrl} || ${pathname}`
    }

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.url} /> }
            {seo.description && (<meta property="og:description" content={seo.description} />)}
            {seo.image && <meta property="og:image" content={seo.url}/>}
            

            <meta name="twiter:card" content="summary_large_image" />

            {twiterUsername && (
                <meta name="twiter:creator" content={twiterUsername}/>
            )}

            {seo.title && (
                <meta name="twiter:title" content={seo.title} />
            )}

            {seo.description && (
                <meta name="twiter:description" content={seo.description}/>
            )}

            {seo.image && <meta name="twiter:image" content={seo.image}/>}

            {seo.icon} && <link rel="icon" type="image/png" href={seo.icon} sizes="32x32" />}

        </Helmet>
    );
}
    

export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
    icon: PropTypes.string
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
    icon: null
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: url
                defaultImage: image
                twitterUsername
                defaultIcon: icon
            }
        }
    }
`