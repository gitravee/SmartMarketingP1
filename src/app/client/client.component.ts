import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ChartModule, UIChart } from 'primeng/chart';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Http } from '@angular/http';
import { CommonService } from '../common.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {

  pieData: any;
  dataBar: any;
  // dataTable: any[];
  // dataTable2: any[];
  // selectedItems: any[];
  // cols: any[];
  // cities: SelectItem[];

  clientDetails: any[];
  clientDatasource: any[];
  clientsTotalRecords: number;
  loading: boolean;
  filesToUpload: Array<File> = [];

  aumDetails: any[];
  aumTotalRecords: number;
  aumDatasource: any[];
  activeTab = 1;
  aumSelectedData;

  investorProfileDetails: any[];
  investorProfileTotalRecords: number;
  investorProfileDatasource: any[];

  investorPreferencesDetails: any[];
  investorPreferencesTotalRecords: number;
  investorPreferencesDatasource: any[];

  constructor(private http: Http, private commonService: CommonService) {
    document.body.style.backgroundImage = 'url("../../assets/Images/Profile-BG.jpg")';
  }

  ngOnInit() {
    // this.dataTable = [];
    // this.dataTable2 = [];
    // this.selectedItems = [];

    // this.cols = [
    //     { field: 'Col1', header: 'Col1', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
    //     { field: 'Col2', header: 'Col2', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
    //     { field: 'Col3', header: 'Col3', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
    //     { field: 'Col4', header: 'Col4', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
    //     { field: 'Col5', header: 'Col5', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
    //     { field: 'Col6', header: 'Col6', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } },
    //     { field: 'Col7', header: 'Col7', sortable: true, filter: true, filterMatchMode: 'contains', allowToggle: true, style: { 'width': '200px', 'vertical-align': 'top' } }
    // ];

    // for (let i = 0; i < 15; i++) {
    //   let group: number = 0;
    //   if (i > 24) {
    //     group = 1;
    //   }
    //   this.dataTable.push({
    //     Col1: 'Value1' + i,
    //     Col2: 'Value' + group,
    //     Col3: Math.round((Math.random() * 1000000000) % 1000000),
    //     Col4: 'Value4',
    //     Col5: 'Value5',
    //     Col6: 'Value6',
    //     Col7: 'Value7'
    //   });
    // }
    this.loading = true;
    this.commonService.GetClients().subscribe(clientDetail => {
      console.log('Clients Data ' + clientDetail);
      this.clientDatasource = clientDetail;
      this.clientsTotalRecords = this.clientDatasource.length;
      this.clientDetails = this.clientDatasource.slice(0, 5);
    });

    this.commonService.GetAum().subscribe((aumData) => {
      console.log('AUM data ' + aumData);
      this.aumDatasource = aumData;
      this.aumTotalRecords = this.aumDatasource.length;
      // if (aumData) {
      //   this.aumDatasource.forEach(element => {
      //     element.cash = '$' + element.cash;
      //     element.stocks = '$' + element.stocks;
      //     element.bonds = '$' + element.bonds;
      //     element.col_401K = '$' + element.col_401K;
      //     element.total_acc_balance = '$' + element.total_acc_balance;
      //   });
      // }
      this.aumDetails = this.aumDatasource.slice(0, 5);
    });

    this.commonService.GetInvestorProfile().subscribe(investorProfileData => {
      console.log('Investor Profile data ' + investorProfileData);
      this.investorProfileDatasource = investorProfileData;
      this.investorProfileTotalRecords = this.investorProfileDatasource.length;
      this.investorProfileDetails = this.investorProfileDatasource.slice(0, 5);
    });

    this.commonService.GetInvestorPreferences().subscribe(investorPreferencesData => {
      console.log('Investor Preferences data ' + investorPreferencesData);
      this.investorPreferencesDatasource = investorPreferencesData;
      this.investorPreferencesTotalRecords = this.investorPreferencesDatasource.length;
      this.investorPreferencesDetails = this.investorPreferencesDatasource.slice(0, 5);
    });
  }

  loadClientsLazy(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
        if (this.clientDatasource) {
            this.clientDetails = this.clientDatasource.slice(event.first, (event.first + event.rows));
        }
    }, 250);
  }
  loadAumLazy(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
        if (this.aumDatasource) {
            this.aumDetails = this.aumDatasource.slice(event.first, (event.first + event.rows));
        }
    }, 250);
  }

  loadInvestorProfileLazy(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
        if (this.investorProfileDatasource) {
            this.investorProfileDetails = this.investorProfileDatasource.slice(event.first, (event.first + event.rows));
        }
    }, 250);
  }

  loadInvestorPreferencesLazy(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
        if (this.investorPreferencesDatasource) {
            this.investorPreferencesDetails = this.investorPreferencesDatasource.slice(event.first, (event.first + event.rows));
        }
    }, 250);
  }

  clientsRowSelect (event) {
   console.log(event);
  }

  aumRowSelect(event) {
    this.aumSelectedData = event.data;
    console.log(this.aumSelectedData);
    this.pieData = {
      labels: ['Bonds', 'Cash', 'Stocks', '401K'],
      datasets: [{
        data: [
          this.aumSelectedData.bonds.replace('$', ''),
          this.aumSelectedData.cash.replace('$', ''),
          this.aumSelectedData.stocks.replace('$', ''),
          this.aumSelectedData.col_401K.replace('$', '')
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };

    this.dataBar = {
      labels: ['1 Month', '1 Year', '2 Year'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [
            this.aumSelectedData.month_1.replace('%', ''),
            this.aumSelectedData.year_1.replace('%', ''),
            this.aumSelectedData.year_2.replace('%', '')
          ]
        }
      ]
    };
  }

  selectTab (tab) {
    if (tab === 'clients') {
      this.activeTab = 1;
    } else if (tab === 'aum') {
      this.activeTab = 2;
    } else if (tab === 'investor-profile') {
      this.activeTab = 3;
    } else {
      this.activeTab = 4;
    }
  }

upload() {
        const formData: any = new FormData();
        const files: Array<File> = this.filesToUpload;
        console.log(files);

        for(let i =0; i < files.length; i++){
            formData.append("uploads[]", files[i], 'profile-avatar.jpg');
        }
        console.log('form data variable :   '+ formData.toString());
        this.http.post('http://localhost:8080/api/upload', formData)
            .map(files => files.json())
            .subscribe(files => console.log('files', files))
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        //this.product.photo = fileInput.target.files[0]['name'];
    }

    ngOnDestroy() {
      document.body.style.backgroundImage = 'none';
    }
}
