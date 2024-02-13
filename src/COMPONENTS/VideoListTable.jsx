import React from 'react'
import firebase from '../FIREBASE/firebase'
import './VideoListTable.css'

const VideoListTable = () => {
  return (
    <div className='frame_dash07_table'>
    <table>
      <thead >
        <tr>
          <th className='Person_Id'><h4>Patient ID</h4></th>
          <th className='order_satus'><h4>Patient Name</h4></th>
          <th className='order_trans'><h4>Operation Name</h4></th>
          <th className='order_refund'><h4>Date</h4></th>
          <th className='th_order_head'><h4>Amount</h4></th>
        </tr>
      </thead>
      <tbody>
        <tr className='tr01'>
          <td className='order_id'><h4>#281209</h4></td>
          <td className='td_success'>
            Venkatesh
          </td>
          <td>Low back pain surgery</td>
          <td>Today, 08:45 PM</td>
          <td className='th_order'>₹1,125.00</td>
        </tr>
        <tr>
          <td className='order_id'><h4>#281209</h4></td>
          <td className='td_success'>
            Giri
          </td>
          <td>Mastectomy</td>
          <td>Yesterday, 3:00 PM</td>
          <td className='th_order'>₹1,125.00</td>
        </tr>
        <tr>
          <td className='order_id'><h4>#281209</h4></td>
          <td className='td_success'>
            Moula
          </td>
          <td>Hemorrhoidectomy</td>
          <td>12 Jul 2023, 03:00 PM</td>
          <td className='th_order'>₹1,125.00</td>
        </tr>
        <tr>
          <td className='order_id'><h4>#281209</h4></td>
          <td className='td_success'>
            Vishnu
          </td>
          <td>Cholecystectomy</td>
          <td>12 Jul 2023, 03:00 PM</td>
          <td className='th_order'>₹1,125.00</td>
        </tr>
        <tr>
          <td className='order_id'><h4>#281209</h4></td>
          <td className='td_success'>
            Siva
          </td>
          <td>Cataract surgery</td>
          <td>12 Jul 2023, 03:00 PM</td>
          <td className='th_order'>₹1,125.00</td>
        </tr>
        <tr>
          <td className='order_id'><h4>#281209</h4></td>
          <td className='td_success'>
            Raja
          </td>
          <td>Carotid endarterectomy</td>
          <td>12 Jul 2023, 03:00 PM</td>
          <td className='th_order'>₹1,125.00</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default VideoListTable;