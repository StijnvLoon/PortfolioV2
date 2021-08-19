import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Paragraph } from 'src/models/Project';
import { ProjectEditor } from 'src/models/ProjectEditor';
import { AuthService } from 'src/services/auth.service';
import { DialogService } from 'src/services/dialog.service';
import { LanguageService } from 'src/services/language.service';
import { LoaderService } from 'src/services/loader.service';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'desktop-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  private routeSub: Subscription;
  public projectEditor: ProjectEditor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
    private projectService: ProjectService,
    public languageService: LanguageService,
    private authService: AuthService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.loaderService.startLoading()
      const url = params['url'];
      this.projectService.getByUrl(url,
        (result) => {
          this.loaderService.stopLoading()
          if (result == undefined) {
            this.projectEditor = new ProjectEditor()
          } else {
            this.projectEditor = new ProjectEditor(JSON.parse(JSON.stringify(result)))
          }
        },
        (error) => {
          this.loaderService.stopLoading(error)
        }
      )
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  addParagraph() {
    this.projectEditor.project.content.push({ title: {}, text: {} })
  }

  removeParagraph(par: Paragraph) {
    const index = this.projectEditor.project.content.indexOf(par)
    this.projectEditor.project.content.splice(index, 1)
  }

  submitProject() {
    if (this.authService.isLoggedIn()) {
      this.loaderService.startLoading()

      if (this.projectEditor.isNewProject) {
        this.projectService.saveProject(
          this.projectEditor.project,
          () => {
            this.loaderService.stopLoading()
          },
          (error) => {
            this.loaderService.stopLoading(error)
          }
        )
      } else {
        this.projectService.updateProject(
          this.projectEditor.project,
          () => {
            this.loaderService.stopLoading()
            this.router.navigate([``])
          },
          (error) => {
            this.loaderService.stopLoading(error)
          }
        )
      }
    } else {
      this.dialogService.showLoginDialog()
    }
  }

  deleteProject() {
    if(this.authService.isLoggedIn()) {
      this.projectService.deleteProject(
        this.projectEditor.project,
        () => {
          this.loaderService.stopLoading()
          this.router.navigate([``])
        },
        (error) => {
          this.loaderService.stopLoading(error)
        }
      )
    } else {
      this.dialogService.showLoginDialog()
    }
  }
}
