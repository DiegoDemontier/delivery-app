import React from 'react';
import './TotalValue.css';

function TotalValue({value}) {
  return (
    <span datat-testid='customer_checkout__element-order-total-price' className='total-value'>Total R$ {value}</span>
  )
}

export default TotalValue;