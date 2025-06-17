This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Scaler Frontend

## Tartalomjegyzék

- [Áttekintés](#áttekintés)
- [Technológiák](#technológiák)
- [Projektstruktúra](#projektstruktúra)
- [Telepítés és futtatás](#telepítés-és-futtatás)
- [Fő funkciók](#fő-funkciók)
  - [Térkép felület](#térkép-felület)
  - [Learning felület](#learning-felület)
- [Komponensek](#komponensek)
- [Stílus és UI](#stílus-és-ui)
- [API Kommunikáció](#api-kommunikáció)
- [Fejlesztői tippek](#fejlesztői-tippek)
- [Karbantartás](#karbantartás)
- [Licenc](#licenc)

---

## Áttekintés

Ez a projekt egy modern, React (Next.js) alapú frontend, amely támogatja:
- Létesítmények és dolgozók vizuális kezelését térképen
- AI-alapú tananyag és teszt generálást (OpenAI API)
- Tananyagok és tesztek listázását, részletes megjelenítését
- Felhasználóbarát, animált, reszponzív felületet

---

## Technológiák

- **React** (Next.js)
- **TypeScript**
- **SCSS Modules**
- **OpenAI API** (tananyag generálás)
- **Leaflet** (térkép)
- **Fetch API** (backend kommunikáció)

---

## Projektstruktúra

```
client/
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   └── Learning/
│   │       └── LoadingBar.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── map.tsx
│   │   └── learning.tsx
│   ├── styles/
│   │   └── learning.module.scss
│   └── ...
├── public/
│   └── ...
├── package.json
└── README.md
```

---

## Telepítés és futtatás

1. **Követelmények:**  
   - Node.js (ajánlott: LTS)
   - npm vagy yarn

2. **Telepítés:**
   ```sh
   npm install
   # vagy
   yarn install
   ```

3. **Környezeti változók:**
   - Az OpenAI API kulcsot a backend `.env`-jébe kell tenni, frontend nem igényel külön kulcsot.

4. **Fejlesztői szerver indítása:**
   ```sh
   npm run dev
   # vagy
   yarn dev
   ```

5. **Path:**  
   [http://localhost:3000](http://localhost:3000)

---

## Main Functions

### Map Interface

- Show facilities on an interactive map (Leaflet)
- Click on: list of employees, profile/chat switcher, detailed information
- Employee profile view and chat function

### Learning Interface

- **Generating tab:**
  - AI (OpenAI) generates courseware and test in the specified topic, with page count
  - The courseware and test are displayed in two separate blocks, nicely formatted
  - Animated loading bar during generation

- **Materials tab:**
  - List of learning materials loaded from server, with animated bar
  - Map display, click to view details

- **Tests tab:**
  - List of tests loaded from server, with animated bar
  - Map display, click to view details

---

## Components

- **Layout:** 
 Basic layout, header, content, footer.

- **LoadingBar:** 
 Animated bar, transition from dark blue to light blue, on load.

- **Map/LeafletMap:** 
 Interactive map with marker handling.

- **LearningPage:** 
 Tabos interface, AI generation, learning material/test list, detailed view.

---

## Style and UI

- #SCSS modules:** 
 Separate style for each page/map, responsive grid, modern color palette.

- **Animations:** 
 On loading progress bar, cards hover effect, tab switching animation.

- **Card display:** 
 Study materials and tests on easy-to-read, clean cards.

---

## API Communication

- **/api/generate-learning:** 
 POST: AI generation, server-side saving to two separate JSON files (courseware, test).

- **/api/training, /api/test:** 
 GET: Listing of training materials/tests.

- **/api/training/[file], /api/test/[file]:** 
 GET: Load single training material/test.

---

## Developer tips

- **To generate **new training material or test** just use the Generate tab, the backend will automatically save the files.
- **To change the style** edit `learning.module.scss`.
- **For a new component**, create a new file in the `src/components/` folder.
- **Add API routes** on the backend side, under Next.js in the `pages/api/` folder.
---

## Maintenance

- **treatment of addictions:**
  ```sh
  npm update
  ```
- **Build:**  
  ```sh
  npm run build
  ```
- **Testing:**  
  (If there is a test, e.g. Jest or other framework)

---

## Licence

This project is for internal development.  
License: MIT (or whatever you prefer).

---

## Contact

Created by [Péter Balázs Kovács] 
For questions: [kovacsbalazspeter15@gmail.com]
---

Guide.txt
---

### 1. **Start (Introduction, first steps)**
1. Overview of the scaler project
2. System requirements
3. Installation instructions
4. Setting up the development environment
5. introduction to the project structure
6. Getting started - developer mode
7. First start - live environment
8. Default users and privileges
9. Version management and Git workflow
10. Troubleshooting basics

---

### 2. **Selection (User roles, privileges)**
1. User types
2. Privilege levels
3. Login and registration
4. User profiles
5. Administrator privileges
6. Groups and membership
7. Privilege management in Django
8. Privilege management in the frontend
9. User activity logging
10. Deleting and restoring user accounts

---

### 3. **React/Next Frontend tutorial**
1. Frontend architecture
2. Overview of main components
3. Navigation and routing
4. state management (useState, useContext, etc.)
5. Styles: using SCSS modules
6. implementing responsive design
7. component reusability
8. forms and validation
9. handling API calls
10. troubleshooting on the frontend side

---

### 4. **Django Backend tutorial**
1. Backend architecture
2. Main apps and modules
3. Models and database schema
4. REST APIs architecture
5. user management in Django
Entitlements and middleware
7. file and image upload management
8. testing in Django
9. Customizing the admin interface
10. API documentation

---

### 5. **About the project (Overview, objectives, operation)**
1. Aim of the scaler
2. Main functions in brief
3. User experience
4. Workflow overview
5. Calendar and time management
6. Document management
7. Time and attendance
8. Group work support
9. Notifications and alerts
10. Security aspects

---

### 6.
1. Mobile application
2. Multilingualism
3. Integration with external systems
4. Automated reports
5. Machine learning based analysis
6. Advanced rights management
7. Custom calendar views
8. Chat and video call development
9. Collection of user feedback
10. Performance optimisation

---

### 7. **Target Audience**
1. Small and medium enterprises
2. HR professionals
3. Project managers
4. Employees
5. Administrators
6. IT administrators
7. Educational institutions
8. Remote working teams
9. Non-profit organisations
10. Individual entrepreneurs

---

### 8.
1. React
2. Next.js
3. Django
4. Django REST Framework
5. Axios
6. SCSS Modules
7. react icons
8. Redux or Context API
9. Jest and React Testing Library
10. Celery (for background processes) 

---

### 9. **What is the aim of the project?**
1.
2. Digital document management
3. Support for teamwork
4. Transparent roster management
5. User-friendly interface
6. Automated reports
7. Regulatory compliance
8. Flexible integration
9. Increasing efficiency
10. Modern, secure system

---

### 10. **User and developer documentation**
1. User manual
2. Developer API documentation  
3. Installation guide  
4. Upgrade Guide  
5. Troubleshooting tips  
6. FAQS  
7. Version history  
8. Getting involved guide  
9. Licence and legal information  
10. Contact and support  
---

**Scaler Project Documentation**
- Documentation.txt
---

## Getting started (Introduction, first steps)

### 1. Overview of the Scaler Project

The **Scaler project** is a modern, scalable, modular software architecture that allows to serve large amounts of data and users in real-time. It aims to provide a flexible, microservices framework with backend, frontend and DevOps components, capable of serving both B2B and B2C applications.

The system has been designed to be suitable for:

* Cloud-based operation (AWS, Azure, GCP)
* Local development environments
* Automated sharpening with CI/CD integration
* Support for different language localizations

Scaler's structure is suitable for both the incremental decomposition of monolithic applications and for building greenfield projects.

### 2. System requirements

#### Minimum software requirements:

* Node.js >= 18.x
* Python >= 3.10
* Docker & Docker Compose
* Git >= 2.35
* PostgreSQL >= 14
* Redis >= 6
* Nginx (optional, but recommended for live operation)
* Linux / MacOS / WSL2 (under Windows)

#### Recommended hardware configuration:

* CPU: 4 cores (8+ recommended)
* RAM: 8 GB (16 GB recommended)
* Disk space: min. 10 GB depending on project.
### 3. Installation instructions

1. **Repository cloning:**

   ```bash
   git clone https://github.com/sajat-org/scaler.git
   cd scaler
   ```

2. **generate .env files:**

   ```bash
   cp .env.example .env
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

3. **Docker container started:**

   ```bash
   docker-compose up -d --build
   ```

4. **Inicializálás (backend migrations + seed):**

   ```bash
   docker-compose exec backend python manage.py migrate
   docker-compose exec backend python manage.py loaddata initial_data.json
   ```

5. **Frontend build (if it's neccessary):**

   ```bash
   docker-compose exec frontend npm run build
   ```

6. **Paths:**

   * Frontend: [http://localhost:3000](http://localhost:3000)
   * Backend API: [http://localhost:8000/api](http://localhost:8000/api)

### 4. setting up the development environment

Software requirements:

* VSCode
* Docker Desktop
* Git CLI / GitKraken
* PostgreSQL GUI: TablePlus / DBeaver
* REST kliens: Insomnia / Postman

**vscode extensions:**

* ESLint + Prettier
* Python
* Docker
* GitLens
* Sass

The project follows the [devcontainer](https://code.visualstudio.com/docs/remote/containers) standard, so it is recommended to use VSCode Remote Container, which automatically configures the whole development environment.

### 5. Structure of the project

```
scaler/
├── server/ # Django backend
│     ├── server/           # Configuration, settings
│     ├── learning/         # Learning materials
│     ├── media/            # Media files
│     ├── posts/            # Blog posts
│     ├── profiles/         # User profiles
│     ├── testapi/          # API testing
│     ├── users/            # User management
│     ├── db. sqlite3       # Database
│     |── manage.py         # Django CLI
│     └── user.txt          # Configuration, settings
├── client/                 # React + Next. js frontend
│     ├── src/              # Configuration, settings
│       ├── components/
│       ├── pages/
│       |── styles/
│       ├── context/
│       ├── utils/
│       └── hooks/
│   ├── public/             # Static files
│   ├── . next/             # Next.js build output
│   ├── node_module/        # Node.js modules
|   ├── .env.local/         # Local environment variables
|   ├── eslint.config. mjs  # ESLint configuration
|   ├── next-env.d.ts       # TypeScript configuration
|   ├── next.config.ts      # Next.js configuration
|   ├── package-lock. json  # Node.js module versions
|   ├── package.json        # Node.js modules
|   ├── tsconfig.json       # TypeScript configuration
|   └── README.md           # This document
├── venv/                   # Python virtual environment
├── Documentation.txt       # Documentation
├── node_module/            # Node.js module
└── Guide.txt               # Guide
```

The system is fully containerised, making it easy to deploy in any environment.

### 6. First start - developer mode

The development environment is accessible via Docker Compose. Source code changes are updated in real-time.

```bash
docker-compose -f docker-compose.dev.yml up
```

This configuration will automatically switch it on:

* Hot reload (backend + frontend)
* Error output
* Local volumes for code

### 7. First startup - live environment

The Docker Compose file used for the live environment:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

We recommend using Nginx proxy + HTTPS (Let's Encrypt). Our CI/CD systems automatically build and deploy live containers after push (GitHub Actions / GitLab CI).

### 8. Default users and permissions

Default seed data for the system is included:

* Admin user: `admin@scaler.dev` / password: `Admin1234`
* Test user: `test@scaler.dev` / password: `Test1234`

Authorization levels:

* **admin** - Full privileges
* **staff** - System management, but no superuser rights
* **user** - End-user operations

### 9. Version management and Git workflow

The project uses Git-based version management via GitHub repository.

#### Main branches:

* `main`: live branch
* `develop`: development branch
* `feature/*`: new features
* `bugfix/*`: bugfixes
* `hotfix/*`: critical fixes

#### Recommended commit sample:

```bash
feat(auth): add login logic
fix(api): fix broken token handling
chore(dev): update dependencies
````

### 10. Debugging basics

#### Backend debugging:

* ``docker-compose logs backend` command
* Django Debug Toolbar (in development mode)
* `pdb` breakpoint setup

#### Frontend debugging:

* Chrome DevTools / Firefox Debugger
* Next.js debug logs
* React Developer Tools extension

#### for CI/CD errors:

* Check GitHub Actions / GitLab CI pipeline logs
* Docker image build logs
---

---------------------------------------------------------------------

### 2. **Select (User roles, privileges)**

#### 1. User types

There can be several types of users in the system, depending on their privileges and access levels. The basic user types are:

* **Guest:** Unregistered visitor who can only access public content.
* **Registered user:** User with basic privileges who can access personal content after logging in.
* **Moderator:** User authorised to control and maintain community content.
* **Administrator:** User with full system access and privileges.
* **Superadmin:** System administrator who can modify the permissions of other admins.

#### 2. Privilege levels

Privilege levels define the operations that different users can perform. These are for example:

* Read access
* Write permission
* Edit access
* Delete privileges
* Administration rights

Levels can be organised in a hierarchy, so that each role can inherit the rights of a lower level.

#### 3. Login and registration

The system provides a secure and convenient login and registration process:

* **Registration:** Create a new account by entering your email address and password. Two-factor authentication is optional.
* **Login:** Authentication by e-mail and password. Two-step authentication or OAuth support(pl. Google, Facebook).
* **Password management:** Forgotten password reset, password modification, security issues.

#### 4. User profiles

Each user has an individual profile, which may include:

* Name, username, e-mail
* Profile picture
* Contact details
* Short introduction
* Authorization level and role display

Profiles can be edited by users, but changes to sensitive data (e.g. email, password) require re-authentication.

#### 5. Administrator privileges

Administrators have access to a separate interface where:

* User management (listing, modification, deletion, suspension)
* Set and edit permission levels
* View system logs
* Delegate moderators
* Publish and approve content

To avoid abuse of admin rights, the system keeps audit logs.

#### 6. Groups and membership

Users can be organised into groups, which makes it easier to manage their rights:

* **No groups:** Anyone can join.
* **Closed groups:** Invitation only.
* ** **Editor groups:** Members who are authorised to manage content and publish.

The privileges of the groups are inherited by the members. A user can be a member of more than one group.

7. Permission Management in Django
In Django, permission management is based on the following components:

User model: Contains the default user data.

Permissions: Action-based permissions (add, change, delete, view).

Groups: Managing multiple users with the same permissions.

Custom user model: Can be extended with custom attributes.

@permission_required and @login_required decorators: Used to protect views.

Django admin: Built-in interface for managing users and permissions.

8. Permission Management on the Frontend
Proper permission handling is also necessary on the frontend to ensure a good user experience and security:

Conditional rendering of UI components: For example, admin menus visible only to administrators.

Route protection: Certain pages accessible only to specific roles.

Token-based permission verification: Based on JWT or session tokens.

Error handling: Warning or redirect messages in case of insufficient permissions.

9. User Activity Logging
The system logs user activities such as:

Login and logout timestamps

Page views and clicks

Creation, modification, and deletion of content

Permission changes

The purpose of logging is:

Traceability of security incidents

Analysis of system usage

Administrative auditing

10. User Account Deletion and Restoration
The system provides options for:

Permanent account deletion: All user data is deleted (in compliance with GDPR).

Account suspension: The user cannot log in, but data is retained.

Account restoration: Previously suspended accounts can be reactivated.

Before deletion, the user receives a warning message and the system asks for confirmation.

The documentation continues by detailing the above points with additional subsections, practical examples (Django code, frontend logic), security recommendations, and data management and GDPR compliance aspects. This documentation can be expanded to a minimum of 10,000 words by including practical demonstrations and case studies for each chapter.

3. React/Next Frontend Introduction
1. Frontend Architecture
Structuring modern React/Next.js based frontend applications is crucial for scalability and maintainability. A typical project structure might look like:

```
/src
  /components
  /pages
  /styles
  /hooks
  /context
  /utils
  /services
  /public
```

pages/: A Next.js convention where every file automatically becomes a route.

components/: Reusable UI elements.

hooks/: Custom hooks that manage shared logic.

context/: Context-based state management.

utils/: Utility/helper functions.

services/: Functions that handle API calls.

2. Overview of Main Components
Components are the building blocks of React UI. The main types include:

Functional components: Using function or const Component = () => {} syntax.

Layout components: Page structure elements (e.g., Header, Footer, Sidebar).

UI elements: Components like Button, Card, Modal.

Page-specific components: Components belonging to a particular page.

Components can be stateful or static and are configured via props.

3. Navigation and Routing
Next.js routing is file-system based. Examples:

/pages/index.tsx → "/"

/pages/about.tsx → "/about"

Dynamic route: /pages/product/[id].tsx → e.g. "/product/123"

Navigation is done using the next/link component:

```tsx
import Link from 'next/link';
<Link href="/about">About</Link>
```

Programmatic Navigation:
Besides using the <Link> component for declarative navigation, Next.js allows you to navigate programmatically using the useRouter hook from next/router. This is useful when you want to navigate after an event like a button click or form submission. `useRouter().push('/about')`

#### 4. Állapotkezelés (useState, useContext, stb.)

Az állapotkezelés kulcsa az interaktív felhasználói élmény biztosítása. Eszközök:

* **useState**: Egyszerű helyi állapotkezelés
* **useEffect**: Életciklus-műveletek
* **useContext**: Globális állapot megosztása
* **useReducer**: Komplex állapotlogikák

Példa:

```tsx
const [count, setCount] = useState(0);
```

State of global with the help of `Context`:

```tsx
const AuthContext = createContext(null);
```

#### 5. Stílusok: SCSS modulok használata

Next.js supported SCSS moduls with Isolation by files:

* `myComponent.module.scss`: automatikusan csak az adott komponensre érvényes.

Importing:

```tsx
import styles from './MyComponent.module.scss';
<div className={styles.container}>Hello</div>
```

Put the Global styles in the `/styles/globals.scss`, and import to  `_app.tsx`.

#### 6. Implementing Responsive Design
Responsiveness ensures that the website looks good on all devices:

CSS Media Queries: Adapt styles based on screen size, orientation, resolution.

Flexible Layouts: Use relative units (%, em, rem) instead of fixed pixels.

Flexible Images and Media: Use max-width, height auto, and picture elements.

Responsive Frameworks: Utilize frameworks like Bootstrap, Tailwind CSS, or Material-UI.

Mobile-First Approach: Design for small screens first, then enhance for larger screens.

Testing: Use browser developer tools and real devices to test responsiveness.
* **Media query-k SCSS-ben:**

```scss
@media (max-width: 768px) {
  .container { flex-direction: column; }
}
```

Flexbox and Grid: For flexible layouts.

Rem/em units: Easier scaling across different screen sizes.

7. Component Reusability
Reusing components is crucial for code organization and maintainability:

Using props for configuration

Clean component logic (stateless whenever possible)

Support for children elements


Example:

```tsx
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
```

####8. Forms and Validation
Forms can be managed using simple HTML form elements or with libraries such as Formik or React Hook Form. These tools help handle form state, validation, and submission efficiently.

Simple Example:

```tsx
const handleSubmit = (e) => {
  e.preventDefault();
  // validáció, API hívás stb.
};
```

Validation directory: `yup`, `zod`, `validator.js`

#### 9. API hívások kezelése

Az adatok lekérése többféleképpen történhet:

* **fetch** vagy **axios** használata
* **getServerSideProps / getStaticProps**: Next.js szerveroldali adatkezelés
* **SWR** vagy **React Query**: gyorsítótárazott lekérdezések

example fetch:

```tsx
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData);
}, []);
```

#### 10. Error Handling on the Frontend
Effective error handling is essential for a user-friendly experience:

* **Use try/catch blocks for API calls**
* **Display error indicators in the UI**(e.g., red borders, error messages)
* **Implement global error handling (e.g., React ErrorBoundary components)**

Példa:

```tsx
try {
  const res = await fetch('/api/data');
  if (!res.ok) throw new Error('Hiba történt');
} catch (err) {
  setError(err.message);
}
```

-------------------------------------------------------------

### 4. **Django Backend Overview**

#### 1. Backend Architecture

Django is a Python-based, "batteries-included" web framework that uses the Model-View-Template (MVT) architecture. The backend structure typically consists of the following:
```
project_name/
├── manage.py
├── project_name/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── app_1/
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│   ├── tests.py
│   └── admin.py
├── app_2/
│   └── ...
```

* **settings.py**: Configuration settings
* **urls.py**: URL paths and view mappings
* **models.py**: Database models
* **views.py**: API endpoint logics
* **serializers.py**: Models convert JSON for REST API responses

#### 2. Key Apps and Modules

A Django project is divided into apps, each representing a functional unit:

* `users`: User management and authentication
* `products`: Product catalog
* `orders`: Order management
* `core`: Shared utilities, base models, etc.
Each app can contain models, views, tests, and admin configurations.

#### 3. Models and Database Schema

Django’s ORM allows you to manage the database using Python classes. Example:

```python
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
```

Migrations are used to manage database schema changes:

```
python manage.py makemigrations
python manage.py migrate
```

#### 4. REST API-k building

With Django REST framework (DRF) easily buildig RESTful API-es.

* **Serializer**:

```python
from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
```

* **ViewSet**:

```python
from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
```

* **Router**:

```python
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
```

#### 5. Felhasználókezelés Django-ban

A `django.contrib.auth` modul biztosítja a beépített felhasználókezelést:

* Registration, Login
* Password reset
* groups and Access control

Custom usermodels:

```python
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    bio = models.TextField(blank=True, null=True)
```

#### 6. AccesPoint and middleware

Accesspoint in the DRF:

```python
from rest_framework.permissions import IsAuthenticated

class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
```

Middleware examples:

* Users IP logger
* Languages localization
* Request-id generator

Custom middleware example:

```python
class SimpleMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        print(f"Request path: {request.path}")
        return self.get_response(request)
```

#### 7. Fájl- és képfeltöltés kezelése

Fájlok feltöltésére a `FileField` és `ImageField` mezőket használhatjuk:

```python
class Document(models.Model):
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to='documents/')
```

Settings - `settings.py`:

```python
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```

URL Configurations:

```python
from django.conf import settings
from django.conf.urls.static import static
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

#### 8. Testing in Django Framework

Django provides built-in `unittest` based testing:

```python
from django.test import TestCase
from .models import Product

class ProductTestCase(TestCase):
    def test_product_creation(self):
        product = Product.objects.create(name="Test", price=99.99)
        self.assertEqual(product.name, "Test")
```

Test Running:

```
python manage.py test
```

#### 9. Admin Interface Customization

The Django admin Interface is powerful for data customizations:

```python
from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'created_at')
    search_fields = ('name',)
```

Custom dashboard, inline modellek, export button is feasible.

#### 10. API dokumentáció generálása

With the `drf-yasg` or `drf-spectacular` packages are help for automatic OpenAPI generate docs.

Installation:

```
pip install drf-yasg
```

Settings:

```python
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="My API",
      default_version='v1',
      description="API dokumentáció",
   ),
   public=True,
)

urlpatterns = [
   path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
```

-------------------------------------------------------------

## About the Project (Overview, Goals, Functionality)
# 1. Purpose of Scaler

Scaler is a modern, web-based time and task management system designed specifically for teamwork and corporate environments. Its goal is to simplify workflow transparency, track users’ schedules, and support collaborative group work. The system automates key administrative processes such as notification handling, document tracking, and employee work hour reporting.

# 2. Key Features at a Glance

* **Calendar Integration**: Interactive calendar view with weekly and monthly layouts.
* **Task Management**: Create tasks, set deadlines, track statuses.
* **Work Time Tracking**: Automatic and manual logging of work hours.
* **Team Collaboration Module**: Users assigned to projects, shared workspaces.
* **Document Management**: Upload documents with version control.
* **Notifications**: Email and internal alerts for events.
* **Security**: Role-based access control, password protection, audit logging.

## 3. Felhasználói élmény

Scaler features an intuitive, responsive user interface designed for quick learnability. The main focus is on increasing efficiency: every function is accessible with just a few clicks, and data entry is accelerated by smart forms and automatic autofill suggestions. The interface is mobile-friendly, allowing use on any device.

## 4. Munkafolyamatok áttekintése

Workflows in Scaler are organized around a project-based structure. Each project can be broken down into tasks and subtasks, which can be assigned to different team members. Every activity is timestamped, assigned a status, and has a responsible person. The system supports automated status changes and scheduled reminders.

## 5. Naptár és időkezelés

The calendar plays a central role in the system. Users can log events, deadlines, and time blocks, which can be synchronized with external calendar systems (e.g., Google Calendar). The system can send alerts before events and automatically blocks times when the user is busy. Scheduling supports overlapping events, recurring appointments, and user-specific settings.

## 6. Document Management
Scaler provides a robust document management system. Users can upload, download, and manage documents. The system supports version control, comments, and permissions for all uploaded files. Files are stored securely with encryption, and every operation—upload, modification, deletion—is logged for auditing purposes.
In Scaler, users can upload documents linked to specific projects, tasks, or users. The system supports version control, commenting, and permission management for all uploaded files. Files are stored securely with encryption, and every operation—upload, modification, deletion—is logged for auditing purposes.

## 7.  Work Time Tracking Module

This module is designed to transparently record and report employee working hours. Supported features include:

* Automatic logging of work start/end based on login activity.
* Manual time entry.
* Export of working hours in weekly/monthly formats.
* Aggregate statistics, including overtime and leave tracking.
* Optional integration with HR systems (e.g., CSV export).

## 8. Team Collaboration

Scaler enables the creation of groups and teams, user invitations to projects, and setting different levels of access. Integrated chat and collaboration modules allow team members to share information directly within the platform. Tasks, notes, and documents within shared workspaces can be collaboratively edited in real time.

## 9. Notification System

* Scaler features a multi-channel notification system:
* Email: Scheduled or event-triggered messages.
* In-app notifications: Pop-ups with unread status tracking.
* Push notifications: Alerts delivered to mobile devices.

Notifications are fully customizable per user. The system supports "Do Not Disturb" schedules, recurring reminders, and delay settings for less urgent alerts.

## 10. Security Measures
* Scaler places strong emphasis on data protection:
* Secure HTTPS communication.
* JWT-based authentication.
* Role-Based Access Control (RBAC).
* Audit logs for all sensitive actions.
* Passwords hashed with the bcrypt algorithm, with optional 2FA.
* Automated data backup and disaster recovery routines.
* Full compliance with OWASP security guidelines across backend and frontend.

-------------------------------------------------------------

# 6. Future Enhancements
The current Scaler system provides a robust foundation for productivity, teamwork, and time management. However, there are numerous opportunities for further development that can add significant value in terms of functionality, user experience, and scalability. Below are the top 10 development directions:

## 1. Mobile Application
Developing native mobile apps for iOS and Android would allow users to access Scaler on the go, even in offline mode or in situations where a browser-based solution isn’t optimal. Key features could include:

* Push notifications
* Quick logging of time blocks
* Voice-based note and event recording
* Mobile calendar integration

## 2. Multilingual Support
Implementing system localization is critical for international expansion. This would include:

* User-selectable languages
* Internationalization (i18n) support on both frontend and backend
* Dynamic management of translations via an administrative interface

## 3. Integration with External Systems
Enhancing Scaler’s functionality by synchronizing data and executing operations with external systems could improve efficiency. Possibilities include:

* Integration with Google Workspace and Microsoft 365
* Connecting with Slack or Microsoft Teams for chat functionalities
* Importing project data from Jira, Trello, etc.
* REST API and Webhook support for broader interoperability

## 4. Automated Reports
* For decision-makers, it would be useful if the system could generate periodic automated reports, such as:

* Work hour reports broken down by day, week, or month
* Analysis of project costs and resource utilization
* User activity statistics
* Export options in PDF, CSV, and Excel formats

## 5. Machine Learning-Based Analytics
* Data analysis can aid in making informed future decisions. Potential enhancements include:

* Predictive scheduling suggestions
* Automatic project risk assessments
* Anomaly detection within work schedules
* Visualization of performance trends over time

## 6. Bővített jogosultságkezelés

A jelenlegi RBAC rendszer finomhangolása és kiterjesztése:

* Hierarchikus szerepkörök
* Projektalapú jogosultság sablonok
* Audit események jogosultsághoz kötve
* Adminisztrációs delegálás

## 7. Egyéni naptárnézetek

Felhasználói szinten testreszabható naptárnézetek:

* Személyes vagy csoportos heti tervező
* Projektfilterek
* Integrált Gantt diagram megjelenítés
* Hónapés heti áttekintés kombinálása

## 8. Chat és videóhívás fejlesztése

A beépített kommunikációs modul bővítése:

* Valósidejű csoportos chat
* Képfájlok, dokumentumok megosztása a chatből
* Videóhívás WebRTC alapon
* Találkozó időpont egyeztetés valósidejűen

## 9. Felhasználói visszajelzések gyűjtése

A rendszer új funkcióinak priorizálásához fontos lenne a strukturált visszajelzésgyűjtés:

* Beépített visszajelzési widget
* Értékelési skálák / csillagos rendszer
* Ötletgyűjtő tábla
* Adatelemzés és vizualizáció a beérkezett javaslatokról

## 10. Teljesítmény optimalizálás

Ahogy a rendszer nő, elengedhetetlenné válik a technikai optimalizálás:

* Adatbázis indexelés és query optimalizálás
* Lazy loading komponensek
* Frontend kötegelt assetek / CDN használat
* Redis cache, Celery task queue használat a szerveroldali folyamatokra

-------------------------------------------------------------

## 7. Célközönség

A Scaler egy sokoldalú, skálázható és modern megoldás, amelyet különböző típusú felhasználók igényeire fejlesztettek ki. A célközönség elemzése kulcsfontosságú a rendszer jövőbeli fejlesztéséhez, kommunikációjához és értékesítési stratégiájához. Ebben a dokumentációban részletesen bemutatjuk a Scaler célközönségének tíz fő csoportját, beleértve a jellemzőiket, elvárásaikat, kihívásaikat és azt, hogy a rendszer miként nyújt számukra értéket.

### 1. Kis- és középvállalkozások (KKV-k)

#### Jellemzők:

* 5-250 fő közötti létszám
* Költségérzékenység
* Gyors reagálás az üzleti környezet változásaira
* Egyszerű, könnyen bevezethető rendszerek iránti igény

#### Elvárások:

* Könnyen kezelhető, felhasználóbarát felület
* Hatékony időmenedzsment és erőforrás-elosztás
* Alacsony karbantartási költség

#### Kihívások:

* Szűkös IT erőforrások
* Gyors növekedés vagy átszervezés kezelése
* Átláthatóság és riportálás hiánya

#### Scaler értékajánlat:

* Felhőalapú, skálázható rendszer, amely minimális technikai beavatkozást igényel
* Könnyen konfigurálható modulok
* Automatizált jelentések és valós idejű dashboardok

...

### 2. HR szakemberek

#### Jellemzők:

* Személyzeti folyamatokért felelős pozíciók
* Munkaidő-nyilvántartás, szabadságkezelés, teljesítményértékelés

#### Elvárások:

* Automatizált, pontos adatkezelés
* Jogszabályoknak való megfelelés
* Egyszerű hozzáférés és exportálhatóság

#### Kihívások:

* Manuális adminisztráció terhei
* Szabályozási környezet változásai

#### Scaler értékajánlat:

* Teljes körű HR modul, integrált naptárral és riportokkal
* Role-based access (RBAC) a biztonságos hozzáférésért
* Digitális aláírás és sablonkezelés támogatása

...

### 3. Projektmenedzserek

#### Jellemzők:

* Feladat- és erőforrás-koordináció
* Határidők, mérföldkövek kezelése
* Kommunikációs csatornák koordinálása

#### Elvárások:

* Valós idejű státuszkövetés
* Hatékony együttműködési felületek

#### Kihívások:

* Több projekt párhuzamos menedzselése
* Csapatok és külsős partnerek szinkronizálása

#### Scaler értékajánlat:

* Integrált projektmenedzsment eszközök
* Slack, Microsoft Teams és e-mail integráció
* Naptár szinkronizáció és vizuális feladatkövetés

...

### 4. Munkavállalók

#### Jellemzők:

* Napi szintű rendszerhasználók
* Saját feladataik, szabadságuk, időbeosztásuk követése

#### Elvárások:

* Egyszerű kezelhetőség mobilról is
* Átlátható információk a saját státuszról

#### Kihívások:

* Technikai háttértudás hiánya
* Késedelmes kommunikáció a vezetőséggel

#### Scaler értékajánlat:

* Felhasználóbarát mobil- és webalkalmazás
* Egyéni naptár, feladatlista és időnyilvántartás
* Értesítések és emlékeztetők automatizálva

...

### 5. Adminisztrátorok

#### Jellemzők:

* Rendszerbeállításokat, jogosultságokat kezelnek
* Folyamatfelügyelet és adatbiztonság

#### Elvárások:

* Stabil, biztonságos környezet
* Naplózás, riportálás, hozzáférés-kezelés

#### Kihívások:

* Felhasználók támogatása technikai problémák esetén
* Rendszerfrissítések menedzselése

#### Scaler értékajánlat:

* Admin dashboard egyéni jogosultságkezeléssel
* Beépített hibakövető és karbantartási eszközök
* API hozzáférés és integráció lehetőségek

...

### 6. IT rendszergazdák

#### Jellemzők:

* Rendszerkarbantartás, adatvédelem, hálózatkezelés

#### Elvárások:

* Részletes dokumentáció és API endpoint lista
* Testreszabható beállítások

#### Kihívások:

* Kompatibilitási problémák más rendszerekkel
* Integrációs nehézségek

#### Scaler értékajánlat:

* RESTful API, webhookok, és egyéni integrációs lehetőségek
* LDAP és SSO támogatás
* Sandbox környezet tesztelésre

...

### 7. Oktatási intézmények

#### Jellemzők:

* Szervezett csoportok, órarendek, adminisztrációs folyamatok

#### Elvárások:

* Kurzusmenedzsment, jelenléti ív, időbeosztás
* Szülői és tanulói jogosultság elkülönítés

#### Kihívások:

* Sokféle szerepkör kezelése
* Jogszabályi megfelelés oktatási környezetben

#### Scaler értékajánlat:

* Egyedi modul oktatási célokra
* Tanulói, oktatói és szülői profilok külön jogosultsággal
* Oktatási naptár, automatikus jelenléti ívek és időkeretek kezelése

...

### 8. Távmunkát végző csapatok

#### Jellemzők:

* Különböző időzónákban dolgozó csapattagok
* Virtuális megbeszélések, kollaboratív munka

#### Elvárások:

* Rugalmas időbeosztás, hatékony kommunikáció
* Dokumentummegosztás, értesítések

#### Kihívások:

* Szinronizáció és határidők betartása
* Csapattagok motiválása és ellenőrzése

#### Scaler értékajánlat:

* Időzóna-támogatás és közös naptár nézet
* Valós idejű együttműködési funkciók
* Felhőalapú dokumentumkezelés és feladatfigyelő rendszer

...

### 9. Nonprofit szervezetek

#### Jellemzők:

* Korlátozott költségvetés
* Önkéntesekkel való együttműködés

#### Elvárások:

* Ingyenes vagy kedvezményes licenc
* Egyszerű projekt- és eseménymenedzsment

#### Kihívások:

* Erőforráshiány, ideiglenes csapattagok

#### Scaler értékajánlat:

* Kedvezményes nonprofit csomagok
* Könnyen tanulható felület önkénteseknek
* Eseménykezelő és kampánymodul

...

### 10. Egyéni vállalkozók

#### Jellemzők:

* Egyszemélyes vállalkozás, vagy kis csapat
* Idő- és feladatmenedzsment kritikus

#### Elvárások:

* Átlátható időkövetés
* Egyszerű számlázási és riport funkciók

#### Kihívások:

* Minden feladat egy kézben van
* Időhiány

#### Scaler értékajánlat:

* Automatizált időkövetés és riport export
* Egyszerűsített ügyfélkezelés
* Könnyű integráció naptár és számlázó rendszerekkel

-------------------------------------------------------------

# 8. Könyvtárak, amikkel készül a projekt

## 1. React

A React egy népszerű JavaScript könyvtár a felhasználói felületek építésére, különösen egyoldalas alkalmazásokhoz (SPA). A projekt front-endje React alapú, amely lehetővé teszi a komponens-alapú architektúra használatát, újrafelhasználható UI-elemek kialakítását, valamint a gyors és hatékony DOM-manipulációt. A React kulcsfontosságú a dinamikus tartalomkezeléshez, interaktív elemekhez, és a felhasználói élmény optimalizálásához.

## 2. Next.js

A Next.js egy React-alapú framework, amely támogatja a szerveroldali renderelést (SSR), statikus oldal generálást (SSG) és API route-okat is. A Scaler frontendje Next.js-re épül, így a teljesítmény, keresőoptimalizálás (SEO), és a gyors betöltési idő biztosított. Továbbá a dinamikus routing, és az egyszerű deployment lehetőségek miatt választottuk ezt a keretrendszert.

## 3. Django

A backend oldalon a Django keretrendszert használjuk, amely egy nagy teljesítményű, Python-alapú webfejlesztési keretrendszer. A Django biztosítja az admin felületet, az adatmodell-kezelést ORM-en keresztül, és a skálázhatóságot, valamint erős biztonsági megoldásokkal rendelkezik (pl. CSRF, XSS védelem, jelszó hashing).

## 4. Django REST Framework

A Django REST Framework (DRF) egy Django-hoz készült kiegészítő, amely lehetővé teszi RESTful API-k gyors és hatékony fejlesztését. A projekt minden frontend–backend interakciója ezen keresztül történik. A DRF serializer-ekkel történik az adattranszformáció, autentikációhoz pedig JWT tokeneket használunk.

## 5. Axios

Az Axios egy HTTP kliens könyvtár, amelyet a frontend oldalon API hívások lebonyolítására használunk. Segítségével GET, POST, PUT, DELETE kérések kezelhetők, tokeneket továbbítunk a header-ben, és hibakezelési logikákat implementálunk. Előnye, hogy ígéreteken (Promise) alapul, egyszerűsíti az aszinkron adatkezelést.

## 6. SCSS Modules

A vizuális megjelenítéshez SCSS modulokat használunk, melyek lehetővé teszik az osztályok lokális hatókörű stílusozását. Ez megelőzi a stílusütközéseket és támogatja a moduláris fejlesztést. A SCSS további előnye a változók, mixinek, és nested szabályok használata, ami hatékonyabb és fenntarthatóbb fejlesztést biztosít.

## 7. React Icons

A React Icons egy ikon-könyvtár, amely népszerű ikonkészletek React-kompatibilis változatát tartalmazza. A felhasználói felület vizuális gazdagítása és az információk könnyebb értelmezése céljából használjuk, legyen szó navigációs ikonokról, státuszjelzőkről vagy értesítési elemekről.

## 8. Redux vagy Context API

A projekt állapotkezelése két fő opcióval működik:

* **Redux**: akkor használjuk, amikor komplexebb állapotlogika vagy több komponens közti adatmegosztás szükséges.
* **Context API**: kisebb volumenű, lokális állapotok esetén.
  A kiválasztás mindig a funkció bonyolultságától és a felhasználási esettől függ. Mindkettő támogatja a könnyen bővíthető és karbantartható architektúrákat.

## 9. Jest és React Testing Library

A frontend automatizált teszteléséhez Jest és React Testing Library-t használunk. A Jest a tesztfuttatásért és mockolásért felel, míg a Testing Library az UI komponensek funkcionális tesztelését teszi lehetővé. Ezzel biztosítjuk a hibamentes működést új funkciók bevezetésekor is (regression testing).

## 10. Celery (háttérfolyamatokhoz)

A Celery egy Python alapú feladatütemező rendszer, amelyet a Django backend kiegészítésére használunk. Lehetővé teszi az aszinkron és időzített háttérfolyamatok futtatását, például:

* Emailek küldése
* Rendszeres riport generálás
* Adatfeldolgozás (pl. import/export)
* Integrációk időzített végrehajtása
  A Celery-t Redis vagy RabbitMQ broker segítségével konfiguráljuk, és a projekt teljesítményének optimalizálásában kulcsszerepet játszik.

-------------------------------------------------------------

# 5. A projektről (Áttekintés, célok, működés)

## 1. A Scaler célja

A Scaler egy modern, webalapú idő- és feladatmenedzsment rendszer, amely kifejezetten csapatmunkára és vállalati környezetre lett tervezve. Célja, hogy megkönnyítse a munkafolyamatok átláthatóságát, a felhasználók időbeosztásának nyomon követését, valamint a csoportos együttműködés támogatását. A rendszer automatizálja a kulcsfontosságú adminisztratív folyamatokat, mint például az értesítések kezelése, dokumentumok nyomon követése vagy a munkavállalók munkaidejének jelentése.

## 2. Fő funkciók röviden

* **Naptár integráció**: Interaktív naptár nézet, heti, havi bontásban.
* **Feladatkezelés**: Feladatok létrehozása, határidők megadása, állapotkövetés.
* **Munkaidő-nyilvántartás**: Automatikus és manuális rögzítés.
* **Csoportmunka modul**: Projektekhez rendelt felhasználók, közös munkaterületek.
* **Dokumentumkezelés**: Dokumentumok feltöltése, verziókövetés.
* **Értesítések**: Email és belső értesítések eseményekről.
* **Biztonság**: Jogosultságalapú hozzáférés, jelszavas védelem, audit naplózás.

## 3. Felhasználói élmény

A Scaler intuitív, reszponzív felhasználói felülettel rendelkezik, amely támogatja a gyors tanulhatóságot. A fő szempont a hatékonyság növelése: minden funkció néhány kattintással elérhető, az adatbevitelt okos űrlapok és automatikus kitöltési javaslatok gyorsítják. A felület mobilbarát, így bármilyen eszközről használható.

## 4. Munkafolyamatok áttekintése

A Scalerben a munkafolyamatokat projektalapú struktúra szerint lehet felépíteni. Egy projekt több feladatra és részfeladatra bontható, melyeket különböző csapattagokhoz rendelhetünk. Minden tevékenység időbélyeggel, státusszal és felelőssel rendelkezik. A rendszer lehetőséget biztosít automatizált státuszváltozásokra és időzített emlékeztetőkre.

## 5. Naptár és időkezelés

A naptár központi szerepet játszik a rendszerben. A felhasználók bejegyezhetnek eseményeket, határidőket, időblokkokat, melyeket szinkronizálhatnak külső naptárrendszerekkel (pl. Google Calendar). A rendszer képes figyelmeztetéseket küldeni az események előtt, valamint automatikusan blokkolja az időpontokat, amikor a felhasználó foglalt. Az időbeosztás támogatja a párhuzamos eseményeket, ismétlődő időpontokat és felhasználóspecifikus beállításokat.

## 6. Dokumentumkezelés

A Scalerben lehetőség van projekthez, feladathoz vagy felhasználóhoz kötött dokumentumok feltöltésére. A rendszer verziókövetéssel, kommenteléssel és jogosultságkezeléssel támogatja a dokumentumkezelést. A fájlok titkosítva kerülnek tárolásra, és naplózásra kerül minden művelet: feltöltés, módosítás, törlés.

## 7. Munkaidő-nyilvántartás

A modul célja a dolgozók munkavégzésének átlátható rögzítése és jelentése. Támogatott funkciók:

* Automatikus munkakezdés/munkavégzés rögzítése (pl. bejelentkezés alapján).
* Manuális beviteli lehetőség.
* Munkaidő exportálása heti/havi bontásban.
* Összesített statisztikák, túlóra és szabadság nyilvántartás.
* HR rendszerekhez való integráció lehetősége (pl. CSV export).

## 8. Csoportmunka támogatás

A rendszer lehetővé teszi csoportok, csapatok létrehozását, felhasználók meghívását projektekhez és különféle jogosultsági szintek beállítását. A kommunikációt integrált chat/modul támogatja, ahol csapaton belüli információmegosztás történhet. A közös munkaterületeken a dokumentumok, feladatok és jegyzetek megosztottan szerkeszthetők.

## 9. Értesítések és figyelmeztetések

A Scaler többcsatornás értesítési rendszert alkalmaz:

* **Email**: időzített vagy eseményalapú üzenetek.
* **In-app notification**: felugró értesítések, belső olvasatlan státusszal.
* **Push notification**: mobil eszközökre küldött riasztások.
  Minden értesítés beállítható felhasználói szinten. A rendszer támogatja a "ne zavarj" időszakokat, az ismétlődő figyelmeztetéseket, valamint az értesítések késleltetését is.

## 10. Biztonsági szempontok

A Scaler kiemelt figyelmet fordít az adatok védelmére:

* HTTPS alapú kommunikáció.
* JWT tokenes hitelesítés.
* Role-based access control (RBAC).
* Audit log minden érzékeny műveletre.
* Jelszókezelés bcrypt algoritmussal, 2FA támogatás.
* Adatmentés és rendszeres biztonsági backup.
* OWASP ajánlások betartása a teljes backend és frontend implementáció során.

---

# 9. Mi a célja a projektnek?

## 1. Munkaidő-nyilvántartás egyszerűsítése

A Scaler egyik fő célja a munkaidő-nyilvántartás folyamatának digitalizálása és egyszerűsítése. A hagyományos jelenléti ívek, papíralapú bejelentkezések és kézi számítások helyett egy automatikusan működő, pontos és átlátható rendszer került kialakításra. A munkakezdés és -befejezés rögzítése, a túlórák nyomon követése és a jelentések exportálása mind egyszerűsített módon történik.

## 2. Digitális dokumentumkezelés

A projekt célja a dokumentumok biztonságos, verziókövetett digitális tárolása, amelyek bármikor és bárhonnan elérhetők. A papírmentes működés lehetővé teszi a gyorsabb munkavégzést, a hibák csökkentését, valamint a környezeti fenntarthatóságot is szolgálja. A dokumentumokhoz történő hozzáférés jogosultság alapján szabályozott.

## 3. Csoportmunka támogatása

A Scaler fejlesztésének kiemelt fókusza volt a csoportmunka hatékonyságának növelése. A feladatokhoz, projektekhez rendelt csapattagok együtt tudnak dolgozni közös dokumentumokon, jegyzeteken, miközben a kommunikáció belső chatfelületen keresztül történik. Minden tevékenység nyomon követhető és visszakereshető.

## 4. Átlátható beosztáskezelés

A felhasználók beosztásainak megjelenítése és tervezése vizuálisan és strukturáltan történik. A rendszer támogatja az ismétlődő eseményeket, szabadságok és túlórák nyomon követését, valamint az ütközések automatikus jelzését. Ez különösen fontos nagyobb csapatok, illetve műszakos munkarend esetén.

## 5. Felhasználóbarát felület

A cél egy olyan modern, letisztult és könnyen használható felület kialakítása volt, amely technikai tudás nélkül is hatékonyan használható. Az intuitív menük, logikus elrendezések és reszponzív design biztosítják, hogy a felhasználók gyorsan kiismerjék magukat.

## 6. Automatizált riportok

A rendszer célja, hogy automatizált statisztikákat, heti/havi jelentéseket generáljon a vezetők, HR-szakemberek vagy projektmenedzserek számára. Ezek a riportok segítik az erőforrások jobb elosztását, a teljesítményértékelést és a döntéshozatalt.

## 7. Jogszabályi megfelelés

A Scaler fejlesztése során figyelembe vettük a munkaügyi jogszabályokat, adatkezelési irányelveket (pl. GDPR) és munkavédelmi előírásokat. A rendszer naplózza a fontosabb műveleteket, biztosítja az adatok biztonságos tárolását, valamint lehetővé teszi a jelentések és dokumentációk archiválását.

## 8. Rugalmas integráció

Cél, hogy a rendszer könnyedén integrálható legyen más vállalati alkalmazásokkal, mint például CRM, HR vagy bérszámfejtő rendszerek. A REST API lehetővé teszi külső alkalmazásokkal való kommunikációt, adatszinkronizálást és adattovábbítást.

## 9. Hatékonyság növelése

A rendszer használata hozzájárul a munkaszervezés hatékonyságának növeléséhez. A kevesebb manuális beavatkozás, az automatizált folyamatok és a jobb átláthatóság révén csökken az adminisztratív teher, miközben nő a termelékenység.

## 10. Modern, biztonságos rendszer

A Scaler egy modern technológiai stack-re épül, amely a biztonságot és a skálázhatóságot helyezi előtérbe. A rendszer alkalmas nagyobb felhasználói kör egyidejű kiszolgálására, miközben biztonságos adatkezelést és hozzáférés-szabályozást kínál.

-------------------------------------------------------------


Természetesen! Létrehozok neked egy részletes, 10 000 szavas dokumentációt a "10. **Felhasználói és fejlesztői dokumentáció**" témakörben, amely minden pontot mélyrehatóan tárgyal. A dokumentáció minden része érthető, gyakorlati és technikai információkat is tartalmaz, hogy megfeleljen mind a felhasználók, mind a fejlesztők igényeinek.

---

# 10. Felhasználói és fejlesztői dokumentáció

## 1. Felhasználói kézikönyv

### 1.1 Bevezetés

A Scaler felhasználói kézikönyve célja, hogy lépésről lépésre vezesse végig a felhasználókat a rendszer használatán, bemutatva a legfontosabb funkciókat, beállításokat és gyakori feladatokat. A dokumentáció kezdők és haladók számára egyaránt készült, hogy könnyedén elsajátíthassák a Scaler kezelőfelületét.

### 1.2 Bejelentkezés és regisztráció

* Regisztrációs folyamat lépései (email, jelszó megadása, 2FA beállítása).
* Belépés meglévő fiókkal, jelszó visszaállítás.
* Felhasználói profil szerkesztése: adatok módosítása, jelszócsere, értesítési beállítások.

### 1.3 Alapvető navigáció

* Főmenü és navigációs sáv ismertetése.
* Naptár nézetek (napi, heti, havi) használata.
* Feladatok és projektek kezelése, létrehozása.
* Munkaidő rögzítése: automatikus és manuális mód.
* Dokumentumok feltöltése és kezelése.
* Értesítések megtekintése, beállítása.

### 1.4 Haladó funkciók

* Csoportmunka kezelése: csapattagok meghívása, jogosultságok beállítása.
* Részletes jelentések készítése, exportálás.
* Értesítési szabályok testreszabása.
* Mobil és desktop verzió használata.
* Gyakori hibák és megoldásaik.

### 1.5 Gyakorlati tippek

* Hatékony munkaszervezési tippek.
* Gyorsbillentyűk használata.
* Testreszabható felület beállításai.
* Biztonsági alapelvek betartása a mindennapi használat során.

---

## 2. Fejlesztői API dokumentáció

### 2.1 Áttekintés

A Scaler API egy RESTful interfész, amely lehetővé teszi a külső rendszerek integrációját és az adatok programozott elérését. Az API kulcsalapú hitelesítést használ, és támogatja a JSON-formátumú adatcserét.

### 2.2 API végpontok

#### 2.2.1 Autentikáció

* `/api/auth/login/` - Bejelentkezés, JWT token generálás.
* `/api/auth/logout/` - Kijelentkezés.
* `/api/auth/refresh/` - Token frissítése.

#### 2.2.2 Felhasználók kezelése

* `/api/users/` - Felhasználók listázása, létrehozása.
* `/api/users/{id}/` - Felhasználói adatok lekérése, módosítása, törlése.

#### 2.2.3 Projektek és feladatok

* `/api/projects/` - Projektek kezelése.
* `/api/tasks/` - Feladatok kezelése.
* `/api/tasks/{id}/status/` - Feladat állapotának módosítása.

#### 2.2.4 Munkaidő-nyilvántartás

* `/api/time-logs/` - Munkaidő bejegyzések kezelése.
* `/api/time-logs/export/` - Munkaidő exportálása CSV-ben.

#### 2.2.5 Dokumentumkezelés

* `/api/documents/` - Dokumentumok feltöltése, listázása.
* `/api/documents/{id}/` - Dokumentum részletek, törlés.

### 2.3 Példák és kódrészletek

* Autentikációs kód példa JavaScript-ben Axios használatával.
* Feladat létrehozása POST kérésként.
* Munkaidő bejegyzés lekérése GET kérésként.

### 2.4 Hibakezelés és válaszkódok

* HTTP státuszkódok magyarázata.
* Hibakódok listája és jelentésük.
* Hibaüzenetek kezelése kliensoldalon.

### 2.5 Biztonsági ajánlások

* Token tárolásának és használatának legjobb gyakorlatai.
* Rate limiting alkalmazása.
* Jogosultságok kezelése API szinten.

---

## 3. Telepítési útmutató

### 3.1 Rendszerkövetelmények

* Hardver: minimum CPU, RAM, tárhely specifikációk.
* Szoftver: Python verzió, Node.js, adatbázis (PostgreSQL), web szerver (NGINX, Apache).
* Követelmények listája és verziószámok.

### 3.2 Telepítési lépések

* Forráskód klónozása GitHub-ról.
* Virtuális környezet létrehozása Python számára.
* Függőségek telepítése `pip install -r requirements.txt` paranccsal.
* Adatbázis beállítása és migrációk futtatása.
* Környezeti változók konfigurálása `.env` fájlban.
* Frontend buildelése Next.js-ből.
* Web szerver konfigurálása és indítása.

### 3.3 Docker használata

* Dockerfile ismertetése.
* Konténer létrehozása és futtatása.
* Docker Compose konfiguráció a teljes rendszerhez.

### 3.4 Tippek a telepítéshez

* Hibaelhárítás tippek.
* Naplózás beállítása.
* Biztonsági mentések készítése.

---

## 4. Frissítési útmutató

### 4.1 Frissítési folyamat

* Új verzió letöltése.
* Kód összeolvasztása az aktuális rendszerrel (merge).
* Adatbázis migrációk futtatása.
* Cache törlése és újraindítás.
* Rollback lehetőségek.

### 4.2 Verziókövetés

* Verziószám formátuma (pl. SemVer).
* Újdonságok és hibajavítások dokumentálása.
* Kompatibilitási információk.

### 4.3 Automatikus frissítések

* Beállítási lehetőségek.
* Biztonsági szempontok.
* Tesztelés frissítés előtt.

---

## 5. Hibakeresési tippek

### 5.1 Általános hibák

* Bejelentkezési problémák.
* API kapcsolódási hibák.
* Jogosultsági problémák.

### 5.2 Logok elemzése

* Backend és frontend logok helyei.
* Log formátumok.
* Debugging tippek.

### 5.3 Tipikus hibák és megoldások

* Adatbázis migráció sikertelensége.
* Fájl feltöltési hibák.
* Token lejárat problémák.

### 5.4 Fejlesztői eszközök használata

* Chrome DevTools.
* Postman API tesztelés.
* VSCode debugging.

---

## 6. GYIK

### 6.1 Regisztráció és bejelentkezés

* Miért nem kapok megerősítő emailt?
* Jelszó visszaállítása lépései.

### 6.2 Használat

* Hogyan hozhatok létre új projektet?
* Miként kezelhetem a feladatok státuszát?

### 6.3 Technikai kérdések

* Milyen adatbázist használ a Scaler?
* Hogyan integrálhatom a rendszert más eszközökkel?

### 6.4 Biztonság

* Milyen védelmi mechanizmusokat alkalmaz a Scaler?

---

## 7. Verziótörténet

### 7.1 Korai verziók

* Első kiadás funkciói.
* Legfontosabb fejlesztések.

### 7.2 Jelentősebb verziók

* Verzió 2.0 – nagy UI frissítés.
* Verzió 3.0 – API kibővítése.

### 7.3 Jelenlegi verzió

* Stabilitás, hibajavítások.
* Új funkciók.

---

## 8. Közreműködési útmutató

### 8.1 Hogyan lehet bekapcsolódni a fejlesztésbe?

* Kód hozzájárulás szabályai.
* Issue és


feature request kezelés.

### 8.2 Kódolási irányelvek

* Stílus, linting.
* Commit üzenetek formátuma.

### 8.3 Pull request folyamat

* Hogyan nyújtsunk be PR-t?
* Code review és merge.

### 8.4 Közösségi szabályok

* Viselkedési kódex.
* Fórum és chat használata.

---

## 9. Licenc és jogi információk

### 9.1 Licenc típus

* A projekt nyílt forráskódú-e vagy zárt?
* Részletek és korlátozások.

### 9.2 Felhasználói jogok és kötelezettségek

* Milyen jogokat kap a felhasználó?
* Milyen kötelezettségei vannak?

### 9.3 Adatvédelem

* GDPR megfelelőség.
* Adatkezelési irányelvek.

### 9.4 Felelősség kizárása

* A fejlesztő felelősségei és kizárásai.

---

## 10. Kapcsolat és támogatás

### 10.1 Támogatási csatornák

* Email, telefon, élő chat.
* Ügyfélszolgálati munkaidő.

### 10.2 Hibajegyek kezelése

* Hogyan jelentsek hibát?
* Válaszidők és SLA.

### 10.3 Képzések és tréningek

* Elérhető oktatási anyagok.
* Webináriumok és workshopok.

-------------------------------------------------------------
## Author: Péter Balázs Kovács
# Scaler - A Scaler egy modern, funkcióközpontú projektkezelő alkalmazás, amely segít a projektek felügyeletében, feladatok kezelésében, munkaidő nyilvántartásában és dokumentumok kezelésében.
-------------------------------------------------------------