import { Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { RoleService } from './role.service';
import {
  CreateRoleDto,
  DeleteRoleDto,
  BindUserDto,
  FindRoleDto,
  BindPermissionDto,
} from './dto/role.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: '新增角色' })
  @Post()
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  @ApiOperation({ summary: '删除角色' })
  @Delete()
  deleteRole(@Body() deleteRoleDto: DeleteRoleDto) {
    return this.roleService.deleteRole(deleteRoleDto);
  }

  @ApiOperation({ summary: '修改角色' })
  @Put(':id')
  updateRole(@Param('id') id: number, @Body() createRoleDto: CreateRoleDto) {
    return this.roleService.updateRole(id, createRoleDto);
  }

  @ApiOperation({ summary: '查询角色列表(不分页)' })
  @Post('query')
  getRoles(@Body() findRoleDto?: FindRoleDto) {
    return this.roleService.getRoles(findRoleDto);
  }

  @ApiOperation({ summary: '查询单个角色' })
  @Get(':id')
  getRoleById(@Param('id') id: number) {
    return this.roleService.getRoleById(id);
  }

  @ApiOperation({ summary: '绑定用户' })
  @Post('users')
  bindUser(@Body() bindUserDto: BindUserDto) {
    return this.roleService.bindUser(bindUserDto);
  }

  @ApiOperation({ summary: '绑定菜单权限' })
  @Post('permissions')
  bindPerimission(@Body() bindUserDto: BindPermissionDto) {
    return this.roleService.bindPermission(bindUserDto);
  }
}
