// import { useEffect, useState } from 'react'
import imageReact from '../assets/react.svg'
import { useParams } from 'react-router'

// type ProductType = {
//   id: number,
//   nameProduct: string,
//   description: string,
//   price: number,
// }

const ProductDetailPage = () => {
  // const [product, setProduct] = useState()
  const { slug } = useParams()
  // const products: ProductType[] = [
  //   {
  //     id: 1,
  //     nameProduct: 'handphone',
  //     description: 'alat yang digunakan setiap hari',
  //     price: 5000000
  //   },
  //   {
  //     id: 2,
  //     nameProduct: 'laptop',
  //     description: 'perkakas penting untuk bekerja dan belajar',
  //     price: 12000000
  //   },
  //   {
  //     id: 3,
  //     nameProduct: 'headphone',
  //     description: 'untuk mendengarkan musik atau meeting online',
  //     price: 750000
  //   },
  //   {
  //     id: 4,
  //     nameProduct: 'mouse wireless',
  //     description: 'mouse tanpa kabel, praktis digunakan',
  //     price: 150000
  //   },
  //   {
  //     id: 5,
  //     nameProduct: 'keyboard mechanical',
  //     description: 'nyaman untuk mengetik lama',
  //     price: 950000
  //   },
  //   {
  //     id: 6,
  //     nameProduct: 'smartwatch',
  //     description: 'jam tangan pintar untuk memantau aktivitas dan notifikasi',
  //     price: 2200000
  //   },
  //   {
  //     id: 7,
  //     nameProduct: 'printer',
  //     description: 'printer multifungsi untuk kebutuhan kantor dan rumah',
  //     price: 1800000
  //   },
  //   {
  //     id: 8,
  //     nameProduct: 'monitor 24 inch',
  //     description: 'monitor besar untuk kenyamanan bekerja',
  //     price: 2300000
  //   },
  //   {
  //     id: 9,
  //     nameProduct: 'webcam HD',
  //     description: 'webcam berkualitas tinggi untuk meeting online',
  //     price: 400000
  //   },
  //   {
  //     id: 10,
  //     nameProduct: 'flashdisk 128GB',
  //     description: 'penyimpanan portabel berkapasitas besar',
  //     price: 250000
  //   }
  // ]

  return (
    <div>
      <h1>Product Detail {slug}</h1>
      <div>
        <img
          src={imageReact}
        />
        <div>
          <h2>React T-Shirt</h2>
          <p>
            The React T-Shirt is comfortable and stylish, perfect for web developers who love React. Made of premium cotton and featuring the iconic React logo.
          </p>
          <div>
            <span>Price: </span>
            <strong>$19.99</strong>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage