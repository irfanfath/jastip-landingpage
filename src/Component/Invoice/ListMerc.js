import React from 'react';

function formatPrice(n) {
  return 'Rp '+ n.toLocaleString('en');
}

function ListMerc({ list, tax, fee }) {
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
            <td>Total Bayar</td>
            <td className="List-number">
              {formatPrice(subtotal)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListMerc;

