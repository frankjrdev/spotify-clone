import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { AuthPageComponent } from "./auth-page.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";

describe('AuthPageComponent', () => {
    let component: AuthPageComponent
    let fixture: ComponentFixture<AuthPageComponent>


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [AuthPageComponent]
        })
            .compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should return invalid', () => {
        //Arrange
        const mockInvalidCredentials = {
            email: 'sadf23',
            passwword: '1234353465lkjlihj6'
        }


        const emailForm: any = component.formLogin.get('email')
        const passwordForm: any = component.formLogin.get('password')

        //Act
        emailForm.setValue(mockInvalidCredentials.email)
        passwordForm.setValue(mockInvalidCredentials.passwword)

        //Assert
        expect(component.formLogin.invalid).toEqual(true)
    })

    it('should return valid', () => {
        //Arrange
        const mockValidCredentials = {
            email: 'test@test.com',
            passwword: '12345678'
        }

        const emailForm: any = component.formLogin.get('email')
        const passwordForm: any = component.formLogin.get('password')

        //Act
        emailForm.setValue(mockValidCredentials.email)
        passwordForm.setValue(mockValidCredentials.passwword)

        //Assert

        expect(component.formLogin.valid).toBeTrue()
    })

    it('The button soudl has the word iniciar sesion'), () => {
        const elementRef = fixture.debugElement.query(By.css('.form-action button'))
        const getInnerText = elementRef.nativeElement.getInnerText

        expect(getInnerText).toEqual('Iniciar Sessissson')
    }

})