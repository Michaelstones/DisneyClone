import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Nav>
        <Logo src='./images/logo.svg'/>
        <NavMenu>
            <a>
                <img src='./images/home-icon.svg'/>
                <span>Home</span>
            </a>

            <a>
                <img src='./images/search-icon.svg'/>
                <span>Search</span>
            </a>

            <a>
                <img src='./images/watchlist-icon.svg'/>
                <span>watchlist</span>
            </a>

            <a>
                <img src='./images/original-icon.svg'/>
                <span>Originals</span>
            </a>

            <a>
                <img src='./images/movie-icon.svg'/>
                <span>Movies</span>
            </a>

            <a>
                <img src='./images/series-icon.svg'/>
                <span>Series</span>
            </a>
           
        </NavMenu>
        <UserImg src='./images/me.jpeg'/>
    </Nav>

  )
}

export default Header

const Nav = styled.div`
    height: 4.375rem;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 2.25rem;
    overflow-x: hidden;

`

const Logo = styled.img`
    width: 5rem;
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left:1.5625rem;
    flex: 1;
    a{
        display: flex;
        align-items: center;
        padding: 0 .75rem;
        cursor: pointer;
        img{
            height: 20px;
        }

        span{
            font-size: 0.8125rem;
            letter-spacing: 0.08875rem;
            text-transform: uppercase;
            position: relative;

            &:after{
                content: '';
                position: absolute;
                background: white;
                height: 2px;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all .25s cubic-bezier(0.25,0.46, 0.45,0.94) 0s;
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;

            }
        }
    }
    


`

const UserImg = styled.img`
    height: 48px;
    width: 48px;
    cursor: pointer;
    border-radius: 50px;
`