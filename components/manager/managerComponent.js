import React from 'react';
import image1 from '../../img/assetlogo.png';
import image2 from '../../img/addshiplogo.jpg';
import image3 from '../../img/reportcard.jpg';

export default function ManagerComponent() {
  return (
    <div class="adminComponent container-fluid">
    <div className="container-fluid table-responsive" id="admin-comp">
      <div className="row">
        <div className="card" id="link_card">
        <img class="card-img-top" src={image1} alt="Card image cap"/>
        <div class="card-img-overlay">
          <div className="card-body">
          <div class="card-text-center" id="bottom" ><strong>ASSETS</strong></div>
            <a href="/manager/assets/get/all" className="stretched-link"></a>
          </div>
        </div>
        </div>

        <div className="card" id="link_card">
        <img class="card-img-top" src={image2} alt="Card image cap"/>
        <div class="card-img-overlay">
          <div className="card-body">
          <div class="card-text-center" id="bottom" ><strong>SHIPMENTS</strong></div>
            <a href="/manager/shipment/all" className="stretched-link"></a>
          </div>
        </div>
        </div>

        <div className="card" id="link_card">
        <img class="card-img-top" src={image3} alt="Card image cap"/>
        <div class="card-img-overlay">
          <div className="card-body">
          <div class="card-text-center" id="bottom" ><strong>REPORT</strong></div>
            <a href="/manager/report" className="stretched-link"></a>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
