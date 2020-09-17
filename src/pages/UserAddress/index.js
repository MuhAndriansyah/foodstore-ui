import React from 'react'

import TopBar from '../../components/TopBar'
import { useAddressData } from '../../hooks/address'
import { LayoutOne, Text, Table, Button } from 'upkit'
import { Link } from 'react-router-dom'

const columns = [
  { Header: 'Nama', accessor: 'nama' },
  {
    Header: 'Detail',
    accessor: (alamat) => {
      return (
        <div>
          {alamat.detail}
          <br />
          {alamat.provinsi}, {alamat.kabupaten},{alamat.kecamatan},{' '}
          {alamat.kelurahan}
        </div>
      )
    }
  }
]

function UserAddress() {
  let { data, page, count, status, limit, setPage } = useAddressData()

  return (
    <LayoutOne size="large">
      <div>
        <TopBar />
        <Text as="h3">Alamat Pengiriman</Text>
        <br />

        <div className="mb-3 text-right">
          <Link to="/alamat-pengiriman/tambah">
            <Button color="green">Tambah Baru</Button>
          </Link>
        </div>

        <br />
        <Table
          items={data}
          columns={columns}
          totalItems={count}
          page={page}
          isLoading={status === 'process'}
          perPage={limit}
          onPageChange={(page) => setPage(page)}
        />
      </div>
      {status === 'success' && !data.length ? (
        <div className="text-center p10">
          Kamu belum menambahkan alamat pengiriman. <br />
          <Link to="/alamat-pengiriman/tambah">
            <Button> Tambah Baru </Button>
          </Link>
        </div>
      ) : null}
    </LayoutOne>
  )
}

export default UserAddress
