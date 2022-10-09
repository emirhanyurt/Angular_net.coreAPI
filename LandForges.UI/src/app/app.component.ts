import { Component } from '@angular/core';
import { LandForge } from './models/land-forges';
import { LandForgeService } from './services/land-forge.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LandForges.UI';
  forges: LandForge[] = [];
  forgeToEdit?: LandForge;
  constructor(private landForgeService: LandForgeService){}
  ngOnInit() : void{
    this.landForgeService
    .getLandForges()
    .subscribe((result: LandForge[]) => (this.forges =result));
  }
  updateForgeList(forges: LandForge[])
  {
    this.forges =forges;
  }

  initNewForge(){
    this.forgeToEdit = new LandForge();
  }
  editForge(forge: LandForge)
  {
    this.forgeToEdit =forge
  }
}
