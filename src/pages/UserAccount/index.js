import React from 'react'
import { LayoutOne, Text, Responsive, Card } from 'upkit'
import TopBar from '../../components/TopBar'
import {
  FaHome,
  FaAddressBook,
  FaArrowRight,
  FaFileInvoice
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const IconWrapper = ({ children }) => {
  return (
    <div className="text-white text-5xl flex justify-center mb5">
      {children}
    </div>
  )
}

const menus = [
  {
    label: 'Beranda',
    icon: (
      <IconWrapper>
        <FaHome />
      </IconWrapper>
    ),
    url: '/'
  },
  {
    label: 'Alamat',
    icon: (
      <IconWrapper>
        <FaAddressBook />
      </IconWrapper>
    ),
    url: '/alamat-pengiriman'
  },
  {
    label: 'Pesanan',
    icon: (
      <IconWrapper>
        <FaFileInvoice />
      </IconWrapper>
    ),
    url: '/pesanan'
  },
  {
    label: 'Logout',
    icon: (
      <IconWrapper>
        <FaArrowRight />
      </IconWrapper>
    ),
    url: '/logout'
  }
]

function UserAccount() {
  return (
    <LayoutOne>
      <TopBar />
      <Text as="h3">Akun Anda</Text>
      <br />

      <Responsive desktop={4} tablet={4} mobile={2}>
        {menus.map((menu, index) => {
          return (
            <div key={index} className="px-2 pb-2">
              <Link to={menu.url}>
                <Card
                  header={menu.icon}
                  body={
                    <div className="text-center font-bold textwhite">
                      {menu.label}
                    </div>
                  }
                />
              </Link>
            </div>
          )
        })}
      </Responsive>
    </LayoutOne>
  )
}

export default UserAccount
