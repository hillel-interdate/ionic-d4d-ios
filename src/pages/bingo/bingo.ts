import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ApiQuery} from '../../library/api-query';
import {DialogPage} from '../dialog/dialog';

/*
 Generated class for the Bingo page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-bingo',
    templateUrl: 'bingo.html'
})
export class BingoPage {

    data: { id: any, user: { id: any }, texts: any, bingo: any } = {id: '', user: {id: ''}, texts: '', bingo: ''};

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public api: ApiQuery) {

        this.data = navParams.get('data');
    }

    toDialog() {

        // this.data.user.id = this.data.bingo.items[0].userId;
        this.navCtrl.push(DialogPage, {user: {id: this.data.bingo.items[0].userId}});
    }

    goBack() {
        this.navCtrl.pop();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BingoPage');
    }

    ionViewWillEnter() {
        this.api.pageName = 'BingoPage';
    }
}
