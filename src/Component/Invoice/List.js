import React from 'react';

function formatPrice(n) {
  return 'Rp '+ n.toLocaleString('en');
}

function List({ list, tax, fee }) {
  const subtotal = list.reduce((acc, item) => (
    acc + (item.quantity * item.unitPrice)
  ), 0);
  const taxes = tax;
  const fees = fee

  return (
    <div className="List">
      <table className="List-content">
        <thead>
          <tr>
            <th>Item</th>
            <th className="List-number">Quantity</th>
            <th className="List-number">Unit price</th>
            <th className="List-number">Line total</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td className="List-number">{item.quantity}</td>
              <td className="List-number">{formatPrice(item.unitPrice)}</td>
              <td className="List-number">
                {formatPrice((item.unitPrice * item.quantity))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="List-totals">
        <tbody>
          <tr>
            <td>Total</td>
            <td className="List-number">
              {formatPrice(subtotal)}
            </td>
          </tr>
          <tr>
            <td>Ongkos Kirim</td>
            <td className="List-number">
              {formatPrice(taxes)}
            </td>
          </tr>
          <tr>
            <td>Biaya Layanan</td>
            <td className="List-number">
              {formatPrice(fees)}
            </td>
          </tr>
          <tr>
            <td>Total Bayar</td>
            <td className="List-number">
              {formatPrice(subtotal + taxes + fees)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List;

