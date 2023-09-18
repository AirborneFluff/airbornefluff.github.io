import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';
import { ShowcaseTitleComponent } from './showcase-title/showcase-title.component';
import { ShowcaseImageComponent } from './showcase-image/showcase-image.component';
import { ShowcaseSkillsGroupComponent } from './showcase-skills-group/showcase-skills-group.component';
import { ShowcaseSkillChipComponent } from './showcase-skill-chip/showcase-skill-chip.component';
import { ShowcaseDescriptionComponent } from './showcase-description/showcase-description.component';
import { ShowcaseLinksGroupComponent } from './showcase-links-group/showcase-links-group.component';
import { ShowcaseLinkComponent } from './showcase-link/showcase-link.component';
import { ShowcaseSubtitleComponent } from './showcase-subtitle/showcase-subtitle.component';



@NgModule({
    declarations: [
        ProjectShowcaseComponent,
        ShowcaseTitleComponent,
        ShowcaseImageComponent,
        ShowcaseSkillsGroupComponent,
        ShowcaseSkillChipComponent,
        ShowcaseDescriptionComponent,
        ShowcaseLinksGroupComponent,
        ShowcaseLinkComponent,
        ShowcaseSubtitleComponent
    ],
  exports: [
    ProjectShowcaseComponent,
    ShowcaseTitleComponent,
    ShowcaseSkillsGroupComponent,
    ShowcaseSkillChipComponent,
    ShowcaseImageComponent,
    ShowcaseDescriptionComponent,
    ShowcaseLinksGroupComponent,
    ShowcaseLinkComponent,
    ShowcaseSubtitleComponent
  ],
    imports: [
        CommonModule
    ]
})
export class ProjectShowcaseModule { }
