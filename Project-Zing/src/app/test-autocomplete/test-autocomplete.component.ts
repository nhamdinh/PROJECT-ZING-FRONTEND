import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {fromEvent, Observable} from 'rxjs';
import {map, mapTo, startWith} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-test-autocomplete',
    templateUrl: './test-autocomplete.component.html',
    styleUrls: ['./test-autocomplete.component.less']
})
export class TestAutocompleteComponent implements OnInit {

    keyword = 'address';

    // data: any;
    errorMsg: string;
    isLoadingResult: boolean;


    data = [
        {
            id: 1,
            name: 'Dakota Gaylord PhD',
            address: '14554 Smith Mews'
        },
        {
            id: 2,
            name: 'Maria Legros',
            address: '002 Pagac Drives'
        },
        {
            id: 3,
            name: 'Brandyn Fritsch',
            address: '8542 Lowe Mountain'
        },
        {
            id: 4,
            name: 'Glenna Ward V',
            address: '1260 Oda Summit'
        },
        {
            id: 5,
            name: 'Jamie Veum',
            address: '5017 Lowe Route'
        }
    ];

    constructor(private  http: HttpClient) {
    }

    ngOnInit() {
    }

    getServerResponse(event) {

        this.isLoadingResult = true;

        // this.http.get("http://www.omdbapi.com/?apikey=[YOUR_API_KEY]&s=" + event)
        //     .subscribe(data => {
        //         if (data['Search'] == undefined) {
        //             this.data = [];
        //             this.errorMsg = data['Error'];
        //         } else {
        //             this.data = data['Search'];
        //         }
        //
        //         this.isLoadingResult = false;
        //     });
    }

    searchCleared() {
        console.log('searchCleared');
        this.data = [];
    }

    selectEvent(item) {
        // do something with selected item
    }

    onChangeSearch(val: string) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }

    onFocused(e) {
        // do something when input is focused
    }

}
