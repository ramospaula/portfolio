import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import * as S from './styled';
import './style.css'

import Avatar from '../Avatar';


const Profile = () => {
    const {
        site: {
            siteMetadata: {
                title, 
                position, 
                description
            }
        }, 
    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    title
                    position
                    description
                }
            }
        }`
    )

    return (
        <S.ProfileWrapper>
            <Avatar />
            <S.Apresentation className="apresentation">
                <aside>
                    <S.Name>{title} </S.Name> 
                    <S.Position>{position}</S.Position>
                    <S.Description> {description }</S.Description>
                    <S.Graduation> Formação: Graduação em Sistemas de Informação em andamento </S.Graduation>
                </aside>
            </S.Apresentation>
        </S.ProfileWrapper> 
    )
}

export default Profile