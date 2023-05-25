import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionExperienceComponent } from 'src/app/modules/home/section-experience/section-experience.component';
import { SectionHomeComponent } from 'src/app/modules/home/section-home/section-home.component';
import { SectionSatisfyComponent } from 'src/app/modules/home/section-satisfy/section-satisfy.component';
import { RoomsComponent } from 'src/app/modules/rooms/rooms.component';
import { RoomTypesComponent } from 'src/app/modules/rooms/room-types/room-types.component';
import { ExploreComponent } from 'src/app/modules/explore/explore.component';
import { BookComponent } from 'src/app/modules/book/book.component';
import { RestaurantComponent } from 'src/app/modules/restaurant/restaurant.component';
import { ExploreHomeComponent } from 'src/app/modules/explore/explore-home/explore-home.component';
import { VideoExploreComponent } from 'src/app/modules/explore/video-explore/video-explore.component';
import { RestaurantHomeComponent } from 'src/app/modules/restaurant/restaurant-home/restaurant-home.component';
import { MenuSearchComponent } from 'src/app/modules/restaurant/menu-search/menu-search.component';
import { DomseguroPipe } from 'src/app/modules/explore/video-explore/domseguro.pipe';
import { MissionComponent } from 'src/app/modules/about/mission/mission.component';
import { MeetOurTeamComponent } from 'src/app/modules/book/meet-our-team/meet-our-team.component';
import { ContactComponent } from 'src/app/modules/login/contact/contact.component';
import { FormBookComponent } from 'src/app/modules/book/form-book/form-book.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from 'src/app/modules/about/map/map.component';
import { ImgExploreComponent } from 'src/app/modules/explore/img-explore/img-explore.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { TableReservedComponent } from 'src/app/modules/reservations/table-reserved/table-reserved.component';
import { MatTableModule } from '@angular/material/table';
import { ReservationsComponent } from 'src/app/modules/reservations/reservations.component';
import { SatisfactionFormComponent } from 'src/app/modules/login/satisfaction-form/satisfaction-form.component';
//import {MatDateFnsModule} from '@angular/material-date-fns-adapter';


@NgModule({
    declarations: [
        DefaultComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        SectionExperienceComponent,
        SectionHomeComponent,
        SectionSatisfyComponent,
        RoomsComponent,
        RoomTypesComponent,
        ExploreComponent,
        BookComponent,
        RestaurantComponent,
        ExploreHomeComponent,
        VideoExploreComponent,
        RestaurantHomeComponent,
        MenuSearchComponent,
        DomseguroPipe,
        MissionComponent,
        MeetOurTeamComponent,
        ContactComponent,
        FormBookComponent,
        MapComponent,
        ImgExploreComponent,
        ReservationsComponent,
        SatisfactionFormComponent,
        TableReservedComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        SharedModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule
    ]
})
export class DefaultModule { }
