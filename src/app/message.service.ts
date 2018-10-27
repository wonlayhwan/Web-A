import { Injectable } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(private message: NzMessageService) { }

    loading(msg: string): void {
        const id = this.message.loading(msg, { nzDuration: 0 }).messageId;

        setTimeout( _ => {
            this.message.remove(id);
        }, 2500);
    }

    error(msg: string): void {
        this.message.error(msg, {nzDuration: 0}); // not auto close
    }

    success(msg: string): void {
        this.message.success(msg); // default option is ok
    }

    warning(msg: string): void {
        this.message.warning(msg);
    }

    info(msg: string): void {
        this.message.info(msg);
    }
}
