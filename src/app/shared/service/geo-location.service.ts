import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root'})
export class GeoLocation {
    public getCurrentPosition(): Promise<any> {
        const options = {
            enableHigh: true,
            timeout: 5000,
            maximumAge: 0
        }
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options)
        })
    }
}