import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './JWT-ROLE/_helpers';
import {IndexComponent} from './index/index.component';
import {RegisterComponent} from './register/register.component';
import {SigninComponent} from './signin/signin.component';
import {CreateSongComponent} from './CRUDSong/create-song/create-song.component';
import {TestAutocompleteComponent} from './test-autocomplete/test-autocomplete.component';
import {ListSongOwnerComponent} from './CRUDSong/list-song-owner/list-song-owner.component';
import {EditSongComponent} from './CRUDSong/edit-song/edit-song.component';
import {ViewDetailSongComponent} from './index/view-detail-song/view-detail-song.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
        // canActivate: [AuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'view-song',
        component: ViewDetailSongComponent
    },
    {
        path: 'create-song',
        component: CreateSongComponent
    },
    {
        path: 'listsong-owner',
        component: ListSongOwnerComponent
    },
    {
        path: 'test-autocpmlete',
        component: TestAutocompleteComponent
    },
    {
        path: 'edit-song',
        component: EditSongComponent
    },
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
