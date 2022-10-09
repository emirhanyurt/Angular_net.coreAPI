import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LandForge } from 'src/app/models/land-forges';
import { LandForgeService } from 'src/app/services/land-forge.service';

@Component({
  selector: 'app-edit-land-forges',
  templateUrl: './edit-land-forges.component.html',
  styleUrls: ['./edit-land-forges.component.css']
})
export class EditLandForgesComponent implements OnInit {
  @Input() forge?: LandForge;
  @Output() forgesUpdated = new EventEmitter<LandForge[]>();
  constructor(private landforgesService: LandForgeService) { }

  ngOnInit(): void {
  }
  saveforge(forge : LandForge){
    this.landforgesService.saveforge(forge)
    .subscribe((forges : LandForge[]) => this.forgesUpdated.emit(forges) );
  }
  deleteforge(forge : LandForge){
    this.landforgesService.deleteforge(forge)
    .subscribe((forges : LandForge[]) => this.forgesUpdated.emit(forges) );
  }
  updateforge(forge : LandForge){
    this.landforgesService.updateforge(forge)
    .subscribe((forges : LandForge[]) => this.forgesUpdated.emit(forges) );
  }
}

