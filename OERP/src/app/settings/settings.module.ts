import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { StyleComponent } from './style/style.component';
import { UnitComponent } from './unit/unit.component';
import { ColorComponent } from './color/color.component';
import { SizeComponent } from './size/size.component';
import { CountComponent } from './count/count.component';
import { QualityComponent } from './quality/quality.component';
import { CompositionComponent } from './composition/composition.component';
import { SourcingComponent } from './sourcing/sourcing.component';
import { BuyerComponent } from './buyer/buyer.component';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { MetarialTypeComponent } from './metarial-type/metarial-type.component';
import { DyingSourceComponent } from './dying-source/dying-source.component';
import { StatusComponent } from './status/status.component';
import { ModeComponent } from './mode/mode.component';
import { SellingChannelComponent } from './selling-channel/selling-channel.component';
import { StyleAddComponent } from './style-add/style-add.component';
import { UnitAddComponent } from './unit-add/unit-add.component';
import { SizeAddComponent } from './size-add/size-add.component';
import { ColorAddComponent } from './color-add/color-add.component';
import { StyleDetailsComponent } from './style-details/style-details.component';
import { StyleEditComponent } from './style-edit/style-edit.component';
import { SizeDetailsComponent } from './size-details/size-details.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { SizeEditComponent } from './size-edit/size-edit.component';
import { UnitEditComponent } from './unit-edit/unit-edit.component';
import { CityAddComponent } from './city-add/city-add.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CountryAddComponent } from './country-add/country-add.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { BuyerAddComponent } from './buyer-add/buyer-add.component';
import { BuyerEditComponent } from './buyer-edit/buyer-edit.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';




@NgModule({
  declarations: [
    StyleComponent,
    UnitComponent,
    ColorComponent,
    SizeComponent,
    CountComponent,
    QualityComponent,
    CompositionComponent,
    SourcingComponent,
    BuyerComponent,
    CityComponent,
    CountryComponent,
    MetarialTypeComponent,
    DyingSourceComponent,
    StatusComponent,
    ModeComponent,
    SellingChannelComponent,
    StyleAddComponent,
    UnitAddComponent,
    SizeAddComponent,
    ColorAddComponent,
    StyleDetailsComponent,
    StyleEditComponent,
    SizeDetailsComponent,
    UnitDetailsComponent,
    SizeEditComponent,
    UnitEditComponent,
    CityAddComponent,
    CityEditComponent,
    CityDetailsComponent,
    CountryAddComponent,
    CountryEditComponent,
    CountryDetailsComponent,
    BuyerAddComponent,
    BuyerEditComponent,
    BuyerDetailsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule
  ]
})
export class SettingsModule { }
