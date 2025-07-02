import { Post, Get, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { RoleService } from './role.service';
import {
  CreateRoleDto,
  DeleteRoleDto,
  BindUserDto,
  BindPermissionDto,
} from './dto/role.dto';
import { ApiOperation, ApiTags, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('role')
@ApiTags('role')
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
  @Get()
  @ApiQuery({ name: 'name', required: false }) // swagger声明 name 可选
  @ApiQuery({ name: 'desc', required: false })
  getRoles(@Query('name') name?: string, @Query('desc') desc?: string) {
    return this.roleService.getRoles(name, desc);
  }

  @ApiOperation({ summary: '查询单个角色' })
  @ApiResponse({ status: 200, description: '' })
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
