import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgRResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
}
