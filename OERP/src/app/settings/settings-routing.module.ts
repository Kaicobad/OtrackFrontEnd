import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { CityComponent } from './city/city.component';
import { ColorComponent } from './color/color.component';
import { CompositionComponent } from './composition/composition.component';
import { CountComponent } from './count/count.component';
import { CountryComponent } from './country/country.component';
import { DyingSourceComponent } from './dying-source/dying-source.component';
import { MetarialTypeComponent } from './metarial-type/metarial-type.component';
import { ModeComponent } from './mode/mode.component';
import { QualityComponent } from './quality/quality.component';
import { SellingChannelComponent } from './selling-channel/selling-channel.component';
import { SizeComponent } from './size/size.component';
import { SourcingComponent } from './sourcing/sourcing.component';
import { StatusComponent } from './status/status.component';
import { StyleComponent } from './style/style.component';
import { UnitComponent } from './unit/unit.component';
import { StyleAddComponent } from "./style-add/style-add.component";
import { UnitAddComponent } from "./unit-add/unit-add.component";
import { SizeAddComponent } from "./size-add/size-add.component";
import { ColorAddComponent } from "./color-add/color-add.component";
import { CountryAddComponent } from "./country-add/country-add.component";
import { CityAddComponent } from "./city-add/city-add.component";
import { BuyerAddComponent } from './buyer-add/buyer-add.component';


const routes: Routes =
[
  {
    path: 'buyer',
    component: BuyerComponent
  },
  {
    path: 'city',
    component: CityComponent
  },
  {
    path: 'color',
    component: ColorComponent
  },
  {
    path: 'composition',
    component: CompositionComponent
  },
  {
    path: 'count',
    component: CountComponent
  },
  {
    path: 'country',
    component: CountryComponent
  },
  {
    path: 'dyingsource',
    component: DyingSourceComponent
  },
  {
    path: 'metarialtype',
    component: MetarialTypeComponent
  },
  {
    path: 'mode',
    component: ModeComponent
  },
  {
    path: 'quality',
    component: QualityComponent
  },
  {
    path: 'sellingchannel',
    component: SellingChannelComponent
  },
  {
    path: 'size',
    component: SizeComponent
  },
  {
    path: 'sourcing',
    component: SourcingComponent
  },
  {
    path: 'status',
    component: StatusComponent
  },
  {
    path: 'style',
    component: StyleComponent
  },
  {
    path: 'unit',
    component: UnitComponent
  },
  {
    path: 'addstyle',
    component: StyleAddComponent
  },
  {
    path: 'addunit',
    component: UnitAddComponent
  },
  {
    path: 'addsize',
    component: SizeAddComponent
  },
  {
    path: 'addcolor',
    component: ColorAddComponent
  },
  {
    path: 'addcountry',
    component: CountryAddComponent
  },
  {
    path: 'addcity',
    component: CityAddComponent
  },
  {
    path: 'addbuyer',
    component: BuyerAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
