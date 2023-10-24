from django.db import models

# Create your models here.
class SR_Staff(models.Model):
    
    class Meta:
        verbose_name = "SR Staff"
        verbose_name_plural = "SR Staff"

    last_name = models.CharField(max_length = 255, verbose_name = 'Фамилия')
    first_name = models.CharField(max_length = 255, verbose_name = 'Имя')
    middle_name = models.CharField(max_length = 255, verbose_name = 'Отчество')
    organization = models.ForeignKey('Organization', on_delete = models.PROTECT, verbose_name = 'Организация')
    department = models.CharField(max_length = 255, verbose_name = 'Отдел')
    oficial_position = models.CharField(max_length = 255, verbose_name = 'Должность')
    project = models.CharField(max_length = 255, verbose_name = 'Проект')
    project_department = models.CharField(max_length = 255, verbose_name = 'Отдел в проекте')
    project_position = models.CharField(max_length = 255, verbose_name = 'Должность в проекте')
    phone = models.CharField(max_length = 255, verbose_name = 'Телефон')
    email = models.CharField(max_length = 255, verbose_name = 'Почта')

    def __str__(self):
        return (f'{self.last_name} {self.first_name} {self.middle_name}')
    
class Organization(models.Model):
    
    class Meta:
        verbose_name = 'Organization'
        verbose_name_plural = 'Organization'

    title = models.CharField(max_length = 255, verbose_name = 'Наименование')
    abbreviated_name = models.CharField(max_length = 255, verbose_name = 'Сокращенное наименование')
    site = models.CharField(max_length = 255, verbose_name = 'Сайт')
    phone = models.CharField(max_length = 255, verbose_name = 'Телефон')
    email = models.CharField(max_length = 255, verbose_name = 'Почта')
    addres = models.CharField(max_length = 255, verbose_name = 'Адрес')

    def __str__(self):
        return (f'{self.abbreviated_name}')
    